import express from 'express';

const signUpRouter = express.Router();

signUpRouter.post('/api/auth/signup', (req, res) => {
	console.log(req.body);
	res.status(422).send({});
});

export default signUpRouter;
