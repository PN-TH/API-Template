import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/user');
    console.log(response);
    expect(response.status).toBe(200);
  });
});
