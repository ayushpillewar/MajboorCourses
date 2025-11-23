# Deploying Majboor UI to AWS ECS Fargate

This guide walks you through deploying your React + Vite application to AWS ECS Fargate.

## Prerequisites

1. **AWS CLI** installed and configured
   ```bash
   aws --version
   aws configure  # Set up your credentials
   ```

2. **Docker** installed and running
   ```bash
   docker --version
   ```

3. **AWS Account** with appropriate permissions for:
   - ECR (Elastic Container Registry)
   - ECS (Elastic Container Service)
   - VPC, IAM, CloudWatch

## Step 1: Build and Test Docker Image Locally

```bash
# Navigate to the majboor-ui directory
cd majboor-ui

# Build the Docker image
docker build -t majboor-ui:latest .

# Test the image locally
docker run -p 8080:80 majboor-ui:latest

# Visit http://localhost:8080 to verify it works
# Press Ctrl+C to stop the container
```

## Step 2: Create ECR Repository

```bash
# Set your AWS region
set AWS_REGION=ap-south-1 # Change to your preferred region

# Create ECR repository
aws ecr create-repository \
    --repository-name majboor-ui \
    --region $AWS_REGION

# Get the repository URI (save this for later)
aws ecr describe-repositories \
    --repository-names majboor-ui \
    --region $AWS_REGION \
    --query 'repositories[0].repositoryUri' \
    --output text
```

## Step 3: Push Docker Image to ECR

```bash
# Get ECR login credentials
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query Account --output text).dkr.ecr.$AWS_REGION.amazonaws.com

# Tag your image (replace ACCOUNT_ID with your AWS account ID)
export ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
export ECR_URI=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/majboor-ui

docker tag majboor-ui:latest $ECR_URI:latest

# Push the image
docker push $ECR_URI:latest
```

## Step 4: Create ECS Cluster

```bash
# Create an ECS cluster
aws ecs create-cluster \
    --cluster-name majboor-cluster \
    --region $AWS_REGION
```

## Step 5: Create Task Execution Role

```bash
# Create the IAM role for ECS task execution
aws iam create-role \
    --role-name ecsTaskExecutionRole \
    --assume-role-policy-document '{
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Principal": {
            "Service": "ecs-tasks.amazonaws.com"
          },
          "Action": "sts:AssumeRole"
        }
      ]
    }'

# Attach the required policy
aws iam attach-role-policy \
    --role-name ecsTaskExecutionRole \
    --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy
```

## Step 6: Register Task Definition

Create a file named `task-definition.json`:

```json
{
  "family": "majboor-ui-task",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "executionRoleArn": "arn:aws:iam::ACCOUNT_ID:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "majboor-ui",
      "image": "ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/majboor-ui:latest",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/majboor-ui",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

Replace `ACCOUNT_ID` and `REGION` with your values, then register it:

```bash
# Create CloudWatch log group first
aws logs create-log-group \
    --log-group-name /ecs/majboor-ui \
    --region $AWS_REGION

# Register the task definition
aws ecs register-task-definition \
    --cli-input-json file://task-definition.json \
    --region $AWS_REGION
```

## Step 7: Create Application Load Balancer (Optional but Recommended)

```bash
# Get your default VPC ID
export VPC_ID=$(aws ec2 describe-vpcs \
    --filters "Name=isDefault,Values=true" \
    --query "Vpcs[0].VpcId" \
    --output text \
    --region $AWS_REGION)

# Get subnet IDs (you need at least 2 in different AZs)
export SUBNET_IDS=$(aws ec2 describe-subnets \
    --filters "Name=vpc-id,Values=$VPC_ID" \
    --query "Subnets[*].SubnetId" \
    --output text \
    --region $AWS_REGION)

# Create security group for the ALB
export ALB_SG=$(aws ec2 create-security-group \
    --group-name majboor-alb-sg \
    --description "Security group for Majboor ALB" \
    --vpc-id $VPC_ID \
    --region $AWS_REGION \
    --query 'GroupId' \
    --output text)

# Allow HTTP traffic to ALB
aws ec2 authorize-security-group-ingress \
    --group-id $ALB_SG \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0 \
    --region $AWS_REGION

# Create security group for ECS tasks
export ECS_SG=$(aws ec2 create-security-group \
    --group-name majboor-ecs-sg \
    --description "Security group for Majboor ECS tasks" \
    --vpc-id $VPC_ID \
    --region $AWS_REGION \
    --query 'GroupId' \
    --output text)

# Allow traffic from ALB to ECS tasks
aws ec2 authorize-security-group-ingress \
    --group-id $ECS_SG \
    --protocol tcp \
    --port 80 \
    --source-group $ALB_SG \
    --region $AWS_REGION

# Create Application Load Balancer
export ALB_ARN=$(aws elbv2 create-load-balancer \
    --name majboor-alb \
    --subnets $SUBNET_IDS \
    --security-groups $ALB_SG \
    --region $AWS_REGION \
    --query 'LoadBalancers[0].LoadBalancerArn' \
    --output text)

# Create target group
export TG_ARN=$(aws elbv2 create-target-group \
    --name majboor-tg \
    --protocol HTTP \
    --port 80 \
    --vpc-id $VPC_ID \
    --target-type ip \
    --health-check-path / \
    --region $AWS_REGION \
    --query 'TargetGroups[0].TargetGroupArn' \
    --output text)

# Create listener
aws elbv2 create-listener \
    --load-balancer-arn $ALB_ARN \
    --protocol HTTP \
    --port 80 \
    --default-actions Type=forward,TargetGroupArn=$TG_ARN \
    --region $AWS_REGION
```

## Step 8: Create ECS Service

```bash
# Create the ECS service with ALB
aws ecs create-service \
    --cluster majboor-cluster \
    --service-name majboor-service \
    --task-definition majboor-ui-task \
    --desired-count 1 \
    --launch-type FARGATE \
    --network-configuration "awsvpcConfiguration={subnets=[$SUBNET_IDS],securityGroups=[$ECS_SG],assignPublicIp=ENABLED}" \
    --load-balancers "targetGroupArn=$TG_ARN,containerName=majboor-ui,containerPort=80" \
    --region $AWS_REGION

# OR create service without ALB (simpler but no load balancing)
aws ecs create-service \
    --cluster majboor-cluster \
    --service-name majboor-service \
    --task-definition majboor-ui-task \
    --desired-count 1 \
    --launch-type FARGATE \
    --network-configuration "awsvpcConfiguration={subnets=[$SUBNET_IDS],securityGroups=[$ECS_SG],assignPublicIp=ENABLED}" \
    --region $AWS_REGION
```

## Step 9: Get the Application URL

```bash
# If using ALB, get the DNS name
aws elbv2 describe-load-balancers \
    --load-balancer-arns $ALB_ARN \
    --query 'LoadBalancers[0].DNSName' \
    --output text \
    --region $AWS_REGION

# If not using ALB, get the task's public IP
aws ecs list-tasks \
    --cluster majboor-cluster \
    --service-name majboor-service \
    --region $AWS_REGION

# Then get task details to find the public IP
aws ecs describe-tasks \
    --cluster majboor-cluster \
    --tasks <task-arn> \
    --region $AWS_REGION
```

## Updating Your Application

When you make changes to your app:

```bash
# 1. Build new Docker image
docker build -t majboor-ui:latest .

# 2. Tag with a new version (optional but recommended)
docker tag majboor-ui:latest $ECR_URI:v1.1

# 3. Push to ECR
docker push $ECR_URI:v1.1
docker push $ECR_URI:latest

# 4. Update task definition with new image
# (Edit task-definition.json with new image tag)

# 5. Register new task definition
aws ecs register-task-definition \
    --cli-input-json file://task-definition.json \
    --region $AWS_REGION

# 6. Update the service to use new task definition
aws ecs update-service \
    --cluster majboor-cluster \
    --service majboor-service \
    --force-new-deployment \
    --region $AWS_REGION
```

## Monitoring and Logs

```bash
# View service status
aws ecs describe-services \
    --cluster majboor-cluster \
    --services majboor-service \
    --region $AWS_REGION

# View logs in CloudWatch
aws logs tail /ecs/majboor-ui --follow --region $AWS_REGION
```

## Cost Optimization

- **Fargate pricing** is based on vCPU and memory per second
- The configuration above uses 0.25 vCPU and 0.5 GB memory (minimal)
- Consider using **Fargate Spot** for non-production environments to save ~70%
- Set up **auto-scaling** based on CPU/memory metrics

## Cleanup

To avoid charges when not in use:

```bash
# Delete the service
aws ecs delete-service \
    --cluster majboor-cluster \
    --service majboor-service \
    --force \
    --region $AWS_REGION

# Delete the cluster
aws ecs delete-cluster \
    --cluster majboor-cluster \
    --region $AWS_REGION

# Delete the ALB (if created)
aws elbv2 delete-load-balancer \
    --load-balancer-arn $ALB_ARN \
    --region $AWS_REGION

# Delete target group
aws elbv2 delete-target-group \
    --target-group-arn $TG_ARN \
    --region $AWS_REGION

# Delete ECR images and repository
aws ecr batch-delete-image \
    --repository-name majboor-ui \
    --image-ids imageTag=latest \
    --region $AWS_REGION

aws ecr delete-repository \
    --repository-name majboor-ui \
    --force \
    --region $AWS_REGION
```

## Troubleshooting

### Task fails to start
- Check CloudWatch logs: `/ecs/majboor-ui`
- Verify security group allows outbound internet access
- Ensure task execution role has ECR pull permissions

### Cannot access the application
- Verify security group allows inbound traffic on port 80
- Check if task has public IP assigned
- Ensure subnets are public and have internet gateway

### High costs
- Review task count (desired count)
- Check if tasks are stuck in pending state
- Consider using smaller CPU/memory allocation

## Production Considerations

1. **HTTPS**: Set up an SSL certificate with AWS Certificate Manager and configure HTTPS listener
2. **Custom Domain**: Use Route 53 to point your domain to the ALB
3. **CI/CD**: Set up GitHub Actions or AWS CodePipeline for automated deployments
4. **Environment Variables**: Store secrets in AWS Secrets Manager or SSM Parameter Store
5. **Auto Scaling**: Configure service auto-scaling based on metrics
6. **Health Checks**: Customize health check paths and intervals
7. **Multi-AZ**: Deploy tasks across multiple availability zones for high availability

## Next Steps

- Set up CI/CD pipeline for automated deployments
- Configure auto-scaling policies
- Add CloudFront CDN for better performance
- Set up monitoring and alerting with CloudWatch
- Implement blue/green deployments

---

**Need help?** Check the [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/) or [AWS CLI Reference](https://docs.aws.amazon.com/cli/latest/reference/ecs/).
