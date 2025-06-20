import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { APIRequestContext, APIResponse, request } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config(); // .env dosyasını yükler

export class CustomWorld extends World {
  token?: string;
  response?: APIResponse;
  responseBody?: any;
  productId?: number;
  username?: string;
  password?: string;
  baseURL: string;

  requestContext!: APIRequestContext;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseURL = process.env.BASE_URL ?? 'https://dummyjson.com';
  }

  async initRequestContext() {
    this.requestContext = await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }

  async disposeRequestContext() {
    await this.requestContext.dispose();
  }
}

setWorldConstructor(CustomWorld);
