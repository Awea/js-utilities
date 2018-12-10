DOC := $(PWD)/node_modules/.bin/documentation

.PHONY: deps
deps: node_modules ## Install/Update dependencies

node_modules: package.json yarn.lock
	@yarn install
	touch $@

.PHONY: doc
doc: 
	$(DOC) build src/index.js -f html -o docs 

.PHONY: doc_watch
doc_watch:
	$(DOC) build src/index.js -f html -o docs -w --config documentation.yml

src/package.json: package.json
	@cp -rf package.json src

src/README.md: README.md
	@cp -rf README.md src

.PHONY: publish
publish: src/package.json src/README.md
	@cd lib; npm publish

.DEFAULT_GOAL := help
.PHONY: help
help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
