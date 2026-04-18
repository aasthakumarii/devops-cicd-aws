# 🚀 DevOps CI/CD Pipeline with Docker & GitHub Actions

!\[CI](https://github.com/aasthakumarii/devops-cicd-aws/actions/workflows/ci.yml/badge.svg)

This project demonstrates a complete **CI/CD pipeline** using **GitHub Actions, Docker, and Node.js**. It automates testing, Docker image creation, and pushing images to Docker Hub.

---

## 📌 Features

- ✅ Automated CI pipeline on every push
- 🧪 Unit testing using Jest
- 🐳 Docker image build after successful tests
- 📦 Push Docker image to Docker Hub
- 🔐 Secure credential management using GitHub Secrets
- 🌿 Branch-based workflow (`dev` → `main`)
- S3 artifacts

---

## ⚙️ Tech Stack

- Node.js
- Jest
- Docker
- GitHub Actions
- Docker Hub

---

## 🔁 CI/CD Pipeline Flow

Code Push → GitHub Actions → Install Dependencies → Run Tests → Build Docker Image → Push to Docker Hub

---

## 📂 Project Structure

.
├── .github/workflows/ci.yml # CI/CD pipeline configuration
├── Dockerfile # Docker build configuration
├── package.json # Project dependencies
├── index.js # Application entry point
└── tests/ # Jest test files

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aasthakumarii/devops-cicd-aws.git
cd devops-cicd-aws
```

2. Install dependencies
   npm install
3. Run tests
   npm test
4. Run the app
   node index.js
   🐳 Docker Usage
   Build Docker Image
   docker build -t yourusername/devops-app .
   Run Container
   docker run -p 3000:3000 yourusername/devops-app
   🔐 GitHub Secrets Setup

Add the following secrets in your GitHub repository:

DOCKER_USERNAME
DOCKER_PASSWORD (use Docker Hub Access Token)
⚡ GitHub Actions Workflow
Trigger
Runs on every push to dev and main
Steps
Install dependencies (npm ci)
Run tests (npm test)
Build Docker image
Push image to Docker Hub (only on main branch)
📦 Docker Image

After a successful pipeline run, your image will be available at:

https://hub.docker.com/r/yourusername/devops-app
🧠 Key Learnings
Building CI/CD pipelines using GitHub Actions
Automating testing and Docker builds
Handling real-world CI/CD issues and debugging
Secure credential management using GitHub Secrets
🔮 Future Improvements
Deploy to AWS (EC2 / ECS / Kubernetes)
Add Docker layer caching
Implement Continuous Deployment (CD)
Add monitoring and logging
👩‍💻 Author

Aastha Kumari

⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
