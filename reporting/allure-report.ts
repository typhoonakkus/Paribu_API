const { AllureRuntime, CucumberJSAllureFormatter } = require('allure-cucumberjs');


export default class AllureReporter extends CucumberJSAllureFormatter {
  constructor(options: any) {
    super(
      options,
      new AllureRuntime({ resultsDir: './reports/allure-results' })
    );
  }
}
