# Faker v10 + Jest + CommonJS Compatibility Issue

Run
`npm run test`

```
 PASS  src/__tests__/user.factory.test.ts
 PASS  src/__tests__/user.service.test.ts

Test Suites: 2 passed, 2 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        3.21 s
Ran all test suites.
```

Now update to 10.0.0 in package.json and run

`npm i; npm run test`

```
● Test suite failed to run

    Jest encountered an unexpected token

...

SyntaxError: Cannot use import statement outside a module

    > 1 | const { faker } = require('@faker-js/faker');
```

Note this seems to be a Jest issue. Running `npm run start` to execute a main.ts/main.js file works ok.