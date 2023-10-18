## Step 1: Install Jest

```bash
npm install --save-dev jest
```

To install Jest for testing, run the above command in your terminal. This will add Jest as a development dependency in your project.

## Step 2: Run the Tests

To run the tests for the `TodoManagement` module, use the following command:

```bash
npx jest TodoManagement.test.js
```

To run tests for the `Warmup` module, execute the following command:

```bash
npx jest Warmup.test.js
```

These commands will execute the Jest test runner and display the test results in your terminal. Ensure your test files are correctly structured with `describe` and `test` blocks to define your test cases.

For more detailed information on configuring and running tests, refer to the [Jest documentation](https://jestjs.io/docs).

---