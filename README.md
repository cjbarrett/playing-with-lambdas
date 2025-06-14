# 💬 Lambda Quote API

A simple AWS Lambda function that returns a random inspirational quote. Built with TypeScript, tested with Jest, and prepared for both local and cloud deployment using Docker and the AWS CLI.

---

## 📁 Project Structure
```text
.
├── src/
│ ├── getQuote.ts # Lambda handler function
│ ├── localInvoke.ts # Local execution script
│ ├── __tests__/ # Jest unit tests
│ │ └── getQuote.test.ts
├── quotes.json 
├── event.json # Sample event payload
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.lambda.json # Stripped-down config for Lambda build
├── jest.config.json 
├── .eslintrc.json 
├── .prettierrc 
├── .dockerignore 
├── .gitignore
├── settings.json 
├── Dockerfile # Local development Dockerfile
├── Dockerfile.lambda # AWS Lambda deployment Dockerfile
├── Makefile # CLI automation for Docker build/test/deploy
```


## 🚀 Getting Started

1. Clone the repo
```bash
git clone https://github.com/your-username/lambda-quote-api.git
cd lambda-quote-api
```

2. Install dependencies
```bash
npm install
```
3. Run tests
```bash
npm run test
```
## 🧪 Local Development

### Option 1: Local Invocation Script
```bash
npm run build
node dist/localInvoke.js
```
### Option 2: Run a Local Express Server (for development/testing convenience)

Make sure server.ts exists in src/, then run:
```bash
npx ts-node src/server.ts
```
### or if you have a script set up:
```bash
npm run dev
```
Then visit http://localhost:3000 in a browser.

### 🐳 Docker Commands
You can use either make or NPM scripts.

### With Make
```bash
make build-local      # Build container locally
make run-local        # Run container locally

make build-lambda     # Build container for Lambda
make push-lambda      # Push Lambda image to ECR
```
### With NPM
```bash
npm run docker:build:local
npm run docker:run:local

npm run docker:build:lambda
npm run docker:push:lambda
```
## ☁️ AWS Lambda Deployment (via ECR)

Authenticate with ECR:
```bash
aws ecr get-login-password --region <your-region> \
  | docker login --username AWS \
  --password-stdin <your-account-id>.dkr.ecr.<your-region>.amazonaws.com
```
### Push image to ECR:

Make sure your ECR repo exists, then:
```bash
make push-lambda
```
or
```bash
npm run docker:push:lambda
```
✅ in .gitignore
Make sure the following are ignored:
```text
node_modules/
dist/
coverage/
.env
```
## 📄 License
MIT