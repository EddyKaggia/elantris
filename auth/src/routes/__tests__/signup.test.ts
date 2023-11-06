import request from 'supertest';
import app from '../../app';

// it('should return 405 error for non-post requests to the signup routes', async () => {
// 	await request(app).get('/').expect(405);
// });

it('should return 422 if the email is not valid', async () => {
	await request(app).post('/api/auth/signup').send({}).expect(422);
});
