import { APIRequestContext } from '@playwright/test';

export class ProductService {
  static async getProducts(requestContext: APIRequestContext, token: string, limit: number) {
    return requestContext.get(`/products?limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async updateProduct(requestContext: APIRequestContext, token: string, productId: number, data: any) {
    return requestContext.put(`/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
    });
  }

  static async deleteProduct(requestContext: APIRequestContext, token: string, productId: number) {
    return requestContext.delete(`/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
