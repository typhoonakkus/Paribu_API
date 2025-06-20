Paribu API Case Study

This project is an API test automation case study prepared for Paribu. It uses Playwright, Cucumber (BDD), TypeScript, and utility classes to structure and execute API tests.

✨ Technologies Used

Playwright (for API testing)

Cucumber.js (for BDD test scenarios using Gherkin)

TypeScript

Node.js

ts-node (to run TypeScript files directly)

cucumber-html-reporter (for HTML reporting)

🔧 Project Structure

paribu-api-case-study/
├── features/
│   ├── login.feature
│   ├── product.feature
│   └── step_definitions/
│       ├── login.steps.ts
│       └── product.steps.ts
│   └── support/
│       ├── customWorld.ts
│       └── hooks.ts
├── src/
│   ├── services/
│   │   ├── authService.ts
│   │   └── productService.ts
│   └── utils/
│       ├── logger.ts
│       ├── testData.ts
│       └── tokenStore.ts
├── scripts/
│   └── generateReport.ts
├── reports/
│   ├── cucumber_report.json
│   └── report.html
├── package.json
├── tsconfig.json
└── README.md

⚡ Installation

Install dependencies:

npm install

💡 Environment Management

This project uses dotenv and dotenv-cli to manage environment variables for different stages.

Environment files
.env.dev (for development)

.env.test (for test environment)

.env.prod (for production)

Sample .env.test file
env
Copy
Edit
BASE_URL=https://dummyjson.com
LOGIN_USERNAME=kminchelle
LOGIN_PASSWORD=0lelplR
How environment variables are loaded
The custom CustomWorld class loads BASE_URL from environment variables to set the API base URL dynamically.

Login credentials are also read from the .env files.

💡 Available Commands

💻 Running Tests
Run all tests with environment variables from .env.test:

npm run test:test
This command internally uses dotenv-cli to load .env.test and runs Cucumber tests with Playwright.

Run all tests (default):

npm run test
Run tests in parallel:

npm run test:parallel
Run a specific feature file:

npx cucumber-js features/login.feature


📄 Generating Reports
After running tests, a JSON report is created at reports/cucumber-report.json.

Generate an HTML report with:

npm run report
This runs the scripts/generateReport.ts script, which converts the JSON report into reports/report.html.

Open the HTML report:

Open reports/report.html in a web browser to see detailed test results.

🧾 Logging

The project includes a lightweight logger utility in src/utils/logger.ts:

Logger.info('Message');
Logger.warn('Warning');
Logger.error('Error');

Each step logs meaningful information (e.g., token validation, product update status) with timestamps. These logs help trace test flows and debug when necessary. Log output is visible in the console during test execution.

✅ Sample Scenarios

login.feature

Scenario: Successful login
  Given the user credentials are prepared from the user list
  When the user logs in with the prepared credentials
  Then the login response should return status 200
  And the access token should be saved

product.feature

Scenario: Get products with a limit and check array length
  Given the user has a valid token
  When the user requests 5 products from the product list
  Then the product list should contain 5 items

Scenario: Update and delete the first product
  Given the user has a valid token
  When the user updates the name of the first product
  Then the response status should be 200
  When the user deletes the updated product
  Then the delete response should be 200

📈 Reporting

The generated HTML report is located at reports/report.html. You can open this file in any browser to view detailed test results.

Prepared by: Typhoon Akkus

Note: This project is built for testing and educational purposes as a demonstration of API testing capabilities for Paribu.

