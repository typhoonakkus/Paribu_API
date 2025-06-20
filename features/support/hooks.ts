import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './customWorld';

Before(async function (this: CustomWorld) {
  // Her senaryodan önce çalışır
  this.token = undefined;
  this.response = undefined;

  // requestContext başlat
  await this.initRequestContext();
});

After(async function (this: CustomWorld) {
  // Her senaryodan sonra cleanup yapılabilir
  await this.disposeRequestContext();
});
