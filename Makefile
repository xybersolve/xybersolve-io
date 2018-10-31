.PHONY: build build-prod lint test deploy open

build:
	npm run build

build-prod:
	npm run build:prod

lint:
	npm lint

test:
	npm test

deploy:
	./deploy --sync

open:
	./deploy --open	