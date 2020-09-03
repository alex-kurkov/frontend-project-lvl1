install:
	@npm install

publish:
	npm publish --dry-run

brain-games:
	node games/brain-games.js

brain-even:
	node games/brain-even.js

brain-calc:
	node games/brain-calc.js

link:
	npm link

lint:
	npx eslint

.PHONEY: test