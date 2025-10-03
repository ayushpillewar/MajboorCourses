
import 'bootstrap/dist/css/bootstrap.min.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NginxDeploy = () => {
    const sshCommand = `
    
    ssh -i "your-key.pem" ubuntu@your-ec2-public-ip-address
    
    #After this run this to go to root user
    sudo su
    
    `;

    
    const installDependencies = `# Update package list
sudo apt update

# Install NVM Node.js and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install --lts

# Install Nginx
sudo apt install -y nginx

# Verify installations
node --version
npm --version
nginx -v

#You will need the following modules also to run the server properly

sudo npm install pm2 -g # process manager for Node.js applications

sudo npm install -g serve # static file serving and directory listing


`;

    const setupProject = `

#Intall git if not installed
sudo apt install git -y
    
# Clone your repository
git clone https://github.com/yourusername/yourrepo.git

# Navigate to project directory
cd yourrepo

# Install dependencies
do this where package.json is present
npm install

# Build the project
npm run build

running the build script will create a dist folder need the location of that in the next step

it could create a different folder based on your project configuration check your vite.config.ts file for the outDir value in the

build: {
    
    outDir: 'dist', // This is the folder which your build will create
    sourcemap: false, 
  },
`;



    const nginxConfig = `server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain or EC2 public IP

    root /var/www/html/majboor-ui/dist; # Path to your build directory
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

}

#change the nginx user to root it should be in the top of the nginx.conf file
change nginx user to root -->     sudo nano /etc/nginx/nginx.conf

`;

    const deployCommands = `
    
# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Start the server using pm2 make sure you are in the project directory where the dist folder is present
pm2 serve dist --name "YourAppName" --spa --port 8080

#Run this command if you want SSL/TLS encryption and to use https
sudo certbot --nginx -d yourdomainname.com -d www.yourdomainname.com

# Do the firewall config for nginx
sudo ufw allow ssh --> do this otherwise you will be locked out of your server
sudo ufw allow 'Nginx Full'
sudo ufw enable

#open your nginx config file and replace the location block with this if you are using pm2 to serve the app
location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        try_files $uri $uri/ =404;
    }


#check logs and debug if needed
how to check logs in nginx --> sudo nano /var/log/nginx/access.log 


`;

    return (
        <div className="container py-5">
            <h1 className="mb-5">Deploy to Amazon EC2 with Nginx</h1>

            {/* Security Group Configuration */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="h4 mb-3">
                        <i className="fas fa-shield-alt text-success me-2"></i>
                        EC2 Security Group Configuration
                    </h2>
                    <p>Configure these inbound rules in your EC2 security group before proceeding:</p>
                    
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="table-light">
                                <tr>
                                    <th>Type</th>
                                    <th>Protocol</th>
                                    <th>Port Range</th>
                                    <th>Source</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HTTP</td>
                                    <td>TCP</td>
                                    <td>80</td>
                                    <td>0.0.0.0/0</td>
                                    <td>Allow HTTP access from anywhere</td>
                                </tr>
                                <tr>
                                    <td>HTTPS</td>
                                    <td>TCP</td>
                                    <td>443</td>
                                    <td>0.0.0.0/0</td>
                                    <td>Allow HTTPS access from anywhere</td>
                                </tr>
                                <tr>
                                    <td>SSH</td>
                                    <td>TCP</td>
                                    <td>22</td>
                                    <td>YOUR_IP/32</td>
                                    <td>Allow SSH access from your IP only it also changes everytime if you have dynamic ip address so you can keep 0.0.0.0/0 also</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="alert alert-warning mt-3">
                        <i className="fas fa-exclamation-triangle me-2"></i>
                        <strong>Security Note:</strong> For SSH access, replace <code>YOUR_IP/32</code> with your actual IP address. 
                        Never allow SSH access from 0.0.0.0/0 (anywhere) in production.
                    </div>

                    <div className="alert alert-info mt-3">
                        <i className="fas fa-info-circle me-2"></i>
                        <strong>Tip:</strong> To find your IP address, visit <a href="https://whatismyip.com" target="_blank" rel="noopener noreferrer">whatismyip.com</a>
                    </div>
                </div>
            </div>
            
            {/* Step 1: SSH */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="h4 mb-3">
                        <i className="fas fa-terminal text-primary me-2"></i>
                        Step 1: SSH into EC2
                    </h2>
                    <p>Connect to your EC2 instance using SSH. Replace <code>your-key.pem</code> and <code>your-ec2-public-dns</code> with your actual values.</p>
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {sshCommand}
                    </SyntaxHighlighter>
                    <div className="alert alert-info mt-3">
                        <i className="fas fa-info-circle me-2"></i>
                        Make sure your key file has proper permissions: <code>chmod 400 your-key.pem</code>
                    </div>
                </div>
            </div>

            {/* Step 2: Install Dependencies */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="h4 mb-3">
                        <i className="fas fa-download text-primary me-2"></i>
                        Step 2: Install Required Software
                    </h2>
                    <p>Install Node.js, npm, and Nginx on your EC2 instance:</p>
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {installDependencies}
                    </SyntaxHighlighter>
                </div>
            </div>

            {/* Step 3: Setup Project */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="h4 mb-3">
                        <i className="fas fa-code-branch text-primary me-2"></i>
                        Step 3: Setup Project
                    </h2>
                    <p>Clone the repository and build the project: 
                    </p>
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {setupProject}
                    </SyntaxHighlighter>
                </div>
            </div>

            {/* Step 4: Nginx Configuration */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="h4 mb-3">
                        <i className="fas fa-server text-primary me-2"></i>
                        Step 4: Configure Nginx
                    </h2>
                    <p>Create a new Nginx configuration file for your application:
                        run the following command to create the nginx config file

                        sudo nano /etc/nginx/sites-available/$variable

                        variable is the name you want to give to your config file could be anything
                        
                    </p>
                    <SyntaxHighlighter language="nginx" style={vscDarkPlus}>
                        {nginxConfig}
                    </SyntaxHighlighter>
                    
                    <p className="mt-4">Apply the configuration:</p>
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {deployCommands}
                    </SyntaxHighlighter>
                </div>
            </div>

            {/* Success Message */}
            <div className="alert alert-success">
                <h3 className="h5">
                    <i className="fas fa-check-circle me-2"></i>
                    Deployment Complete!
                </h3>
                <p className="mb-0">Your application should now be accessible at <code>http://your-domain.com</code> or your EC2 public IP address.</p>
            </div>

            {/* Additional Tips */}
            <div className="card mt-4 border-info">
                <div className="card-body">
                    <h3 className="h5 text-info">
                        <i className="fas fa-lightbulb me-2"></i>
                        Pro Tips
                    </h3>
                    <ul className="mb-0">
                        <li>Set up SSL/HTTPS using Let's Encrypt for security</li>
                        <li>Configure your domain's DNS settings if using a custom domain</li>
                        <li>Set up proper security groups in EC2 (open ports 80 and 443)</li>
                        <li>Consider using PM2 for process management if running a Node.js server</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NginxDeploy;
