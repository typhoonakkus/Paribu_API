import { APIRequestContext } from '@playwright/test';

export class AuthService {
  constructor(private request: APIRequestContext) {}

  async getRandomUser() {
    const res = await this.request.get('/users');
    if (!res.ok()) throw new Error('Failed to fetch users');

    const body = await res.json();
    const users = body.users;
    const randomUser = users[Math.floor(Math.random() * users.length)];

    return {
      username: randomUser.username,
      password: randomUser.password,
    };
  }

  async login(username: string, password: string) {
    const response = await this.request.post('/auth/login', {
      data: { username, password },
    });
    return response;
  }
}
