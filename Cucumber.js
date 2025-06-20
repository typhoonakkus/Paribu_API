module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['features/step_definitions/**/*.ts', 'features/support/**/*.ts'],
    format: ['json:./reports/cucumber-report.json', 'progress'],
    requireModule: ['ts-node/register'],
    timeout: 60 * 1000,
  },
};
