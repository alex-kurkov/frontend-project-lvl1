install:
	npm install

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gdc:
	node bin/brain-gdc.js

brain-progression:
	node bin/brain-progression.js

lint:
	npx eslint ./
