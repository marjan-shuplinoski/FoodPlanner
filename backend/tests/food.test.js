import request from 'supertest';
import app from '../src/server.js';

describe('Food Routes', () => {
  let token;
  beforeAll(async () => {
    await request(app)
      .post('/api/auth/register')
      .send({ email: 'fooduser@example.com', password: 'password123' });
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'fooduser@example.com', password: 'password123' });
    token = res.body.token;
  });

  it('should create a food entry', async () => {
    const res = await request(app)
      .post('/api/food')
      .set('Authorization', `Bearer ${token}`)
      .send({ time: '12:00', description: 'Lunch', date: '2025-08-13' });
    expect(res.statusCode).toBe(201);
    expect(res.body.description).toBe('Lunch');
  });

  it('should get all food entries for user', async () => {
    const res = await request(app)
      .get('/api/food')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
