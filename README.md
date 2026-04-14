!\[CI](https://github.com/aasthakumarii/devops-cicd-aws/actions/workflows/ci.yml/badge.svg)

🚀 DevOps CI/CD Pipeline with Docker & GitHub Actions

This project demonstrates a complete CI/CD pipeline built using GitHub Actions, Docker, and Node.js, automating testing, building, and deployment workflows.

📌 Features
✅ Automated CI pipeline on every push
🧪 Unit testing using Jest
🐳 Docker image build after successful tests
📦 Push Docker image to Docker Hub
🔐 Secure credential handling using GitHub Secrets
🌿 Branch-based workflow (dev → main)
⚙️ Tech Stack
Node.js
Jest
Docker
GitHub Actions
Docker Hub
🔁 CI/CD Pipeline Flow
Code Push → GitHub Actions Trigger → Install Dependencies → Run Tests → Build Docker Image → Push to Docker Hub
📂 Project Structure
.
├── .github/workflows/ci.yml # CI/CD pipeline configuration
├── Dockerfile # Docker build configuration
├── package.json # Project dependencies
├── index.js # Application entry point
└── tests/ # Jest test files
🚀 Getting Started (Local Setup)

1. Clone the repository
   git clone https://github.com/yourusername/devops-cicd-aws.git
   cd devops-cicd-aws
2. Install dependencies
   npm install
3. Run tests
   npm test
4. Run app locally
   node index.js
   🐳 Docker Setup
   Build Docker Image
   docker build -t yourusername/devops-app .
   Run Container
   docker run -p 3000:3000 yourusername/devops-app
   🔐 GitHub Secrets Setup

Add the following secrets in your repository:

DOCKER_USERNAME
DOCKER_PASSWORD (Docker Hub Access Token)
⚡ GitHub Actions Workflow
Trigger
Runs on every push to dev and main
Steps
Install dependencies (npm ci)
Run tests (npm test)
Build Docker image
Push image to Docker Hub (only on main branch)
📦 Docker Image

After a successful pipeline run, the image is available at:

https://hub.docker.com/r/yourusername/devops-app
🧠 Key Learnings
Setting up CI/CD pipelines using GitHub Actions
Automating testing and builds
Handling Docker image creation and tagging
Debugging real-world CI/CD issues
Secure credential management with GitHub Secrets
🔮 Future Improvements
🚀 Deploy to AWS (EC2 / ECS / Kubernetes)
⚡ Add Docker layer caching
📊 Add monitoring/logging
🔁 Implement CD (auto-deployment)
👩‍💻 Author

Aastha Kumari

⭐ Show Your Support

If you found this helpful, give it a ⭐ on GitHub!
