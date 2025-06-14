.PHONY: build-local run-local build-lambda push-lambda

build-local:
	docker build -t playing-with-lambdas:local .

run-local:
	docker run --rm -p 3000:3000 playing-with-lambdas:local


build-lambda:
	docker build -f Dockerfile.lambda -t playing-with-lambdas:lambda .

push-lambda:
	@echo "Make sure you are logged in to ECR first!"
	docker push <your-ecr-uri>/playing-with-lambdas:lambda
