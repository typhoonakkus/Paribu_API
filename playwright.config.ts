import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://dummyjson.com',  // API base url
  },
});
