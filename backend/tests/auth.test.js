import request from 'supertest';
import app from '../src/server.js';

describe('Auth Routes', () => {
  it('should register a new user and return a JWT', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@example.com', password: 'password123' });
    expect(res.statusCode).toBe(201);
    expect(res.body.token).toBeDefined();
  });

  it('should login an existing user and return a JWT', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({ email: 'login@example.com', password: 'password123' });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'login@example.com', password: 'password123' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
