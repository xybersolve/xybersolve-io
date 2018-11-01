.PHONY: build build-prod lint test deploy open

build:
	npm run build

build-prod:
	#npm run build:prod
	@docker run -it xybersolve/minimal-node-build-env:latest /bin/bash

lint:
	npm lint

test:
	npm test

deploy:
	./deploy --sync

open:
	./deploy --open	