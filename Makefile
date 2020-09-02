install:
	@npm install

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

link:
	npm link

lint:
	npx eslint

.PHONEY: test