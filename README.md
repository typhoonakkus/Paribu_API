Paribu API Case Study

This project is an API test automation case study prepared for Paribu. It uses Playwright, Cucumber (BDD), TypeScript, and utility classes to structure and execute API tests.

✨ Technologies Used

Playwright (for API testing)

Cucumber (for BDD-style Gherkin scenarios)

TypeScript

Node.js

ts-node (to run TypeScript files directly)

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

💡 Commands

Run Tests

npm run test

This runs all scenarios written in Gherkin format and writes a JSON report to the reports/ folder.

or 

run specific feature file with this command 
npx cucumber-js features/login.feature


Generate HTML Report

npm run report

Runs the scripts/generateReport.ts file using ts-node to generate report.html.

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

