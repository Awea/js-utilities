.DEFAULT_GOAL := help
.PHONY: deps build help

DOC := $(PWD)/node_modules/.bin/documentation

deps: node_modules ## Install/Update dependencies

node_modules: package.json yarn.lock
	@yarn install
	touch $@

doc: 
	$(DOC) build src/index.js -f html -o docs 

doc_watch:
	$(DOC) build src/index.js -f html -o docs -w --config documentation.yml

help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
