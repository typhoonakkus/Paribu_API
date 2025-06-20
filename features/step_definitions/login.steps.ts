import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AuthService } from '../../src/services/authService';
import { CustomWorld } from '../support/customWorld';
import { TokenStore } from '../../src/utils/tokenStore';
import { Logger } from '../../src/utils/logger';

let authService: AuthService;

Before(async function (this: CustomWorld) {
  await this.initRequestContext();
  authService = new AuthService(this.requestContext);
});

After(async function (this: CustomWorld) {
  await this.disposeRequestContext();
});

Given('the user credentials are prepared from the user list', async function (this: CustomWorld) {
  const { username, password } = await authService.getRandomUser();
  Logger.info(`Fetched user credentials: username=${username}, password=${password}`);
  this.username = username;
  this.password = password;
});

When('the user logs in with the prepared credentials', async function (this: CustomWorld) {
  Logger.info(`Attempting login with username: ${this.username}`);

  
  this.attach(
    `POST /auth/login\nRequest Body:\n${JSON.stringify(
      { username: this.username, password: '***' },
      null,
      2
    )}`
  );

  const loginResponse = await authService.login(this.username!, this.password!);
  const loginBody = await loginResponse.json();

  Logger.info(`Login response status: ${loginResponse.status()}`);

  
  this.attach(
    `Response Status: ${loginResponse.status()}\nResponse Body:\n${JSON.stringify(loginBody, null, 2)}`
  );

  this.token = loginBody.token || loginBody.accessToken; 
  TokenStore.setToken(this.token!);

  this.response = loginResponse;
  this.responseBody = loginBody;
});

Then('the login response should return status 200', function (this: CustomWorld) {
  Logger.info(`Asserting login response status is 200`);
  expect(this.response?.status()).toBe(200);
});

Then('the access token should be saved', function (this: CustomWorld) {
  Logger.info(`Asserting access token is saved`);
  expect(this.token).toBeDefined();
  expect(typeof this.token).toBe('string');
});


When('the user logs in with username {string} and password {string}', async function (
  this: CustomWorld,
  username: string,
  password: string
) {
  
  this.attach(
    `POST /auth/login\nRequest Body:\n${JSON.stringify(
      { username, password: '***' },
      null,
      2
    )}`
  );

  const loginResponse = await authService.login(username, password);
  const loginBody = await loginResponse.json();

  
  this.attach(
    `Response Status: ${loginResponse.status()}\nResponse Body:\n${JSON.stringify(loginBody, null, 2)}`
  );

  this.token = loginBody.token || loginBody.accessToken;
  this.response = loginResponse;
  this.responseBody = loginBody;
});

Then('the login response should return status 400', function (this: CustomWorld) {
  expect(this.response?.status()).toBe(400);
});

Then('the error message should be {string}', function (this: CustomWorld, expectedMessage: string) {
  Logger.info(`Asserting error message: expected='${expectedMessage}', actual='${this.responseBody.message}'`);
  expect(this.responseBody.message).toBe(expectedMessage);
});
