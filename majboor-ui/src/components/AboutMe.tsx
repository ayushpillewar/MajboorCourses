function AboutMe() {
    return (
        <div
            style={{
                maxWidth: "600px",
                margin: "2rem auto",
                padding: "2rem",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                fontFamily: "Segoe UI, Arial, sans-serif",
            }}
        >
            <h2
                style={{
                    color: "#2d3748",
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #3182ce",
                    display: "inline-block",
                    paddingBottom: "0.25rem",
                }}
            >
                About Me
            </h2>
            <p style={{ color: "#4a5568", fontSize: "1.1rem", lineHeight: 1.7 }}>
                I am an <b>AWS Cloud Developer</b> with over <b>7 years</b> of professional experience in the tech industry.
                My expertise spans designing, deploying, and maintaining scalable cloud solutions using AWS services such as <b>EC2</b>, <b>Lambda</b>, <b>S3</b>, <b>RDS</b>, and more.
                <br />
                <br />
                I am proficient in a wide range of modern programming languages and frameworks, including <b>TypeScript</b>, <b>JavaScript</b>, <b>Python</b>, <b>Java</b>, and <b>Node.js</b>.
                I have hands-on experience with <b>CI/CD pipelines</b>, containerization with <b>Docker</b>, and infrastructure as code using tools like <b>Terraform</b> and <b>AWS CloudFormation</b>.
                <br />
                <br />
                I am passionate about leveraging the latest technologies to deliver robust, secure, and efficient cloud-based applications.
            </p>
        </div>
    );
}

export default AboutMe;
