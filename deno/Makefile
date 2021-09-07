# A Makefile to `make` life easier
# Run `make` or `make help` to see all options

SHELL := /bin/bash

.PHONY: help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

watch: ## Run the app and restart on changes
	docker run -it --init -p 8080:8080 -v $(PWD):/app -e PORT=8080 denoland/deno:alpine run --allow-net=0.0.0.0 --allow-env=PORT --watch /app/main.ts

compile: ## Compile the app to a single executable
	docker run -it --init -v $(PWD):/app denoland/deno:alpine compile --allow-net=0.0.0.0 --allow-env=PORT -o /app/bin/main /app/main.ts

deploy: compile ## Compile and deploy the app to Cloud Foundry
	cf push test-deno