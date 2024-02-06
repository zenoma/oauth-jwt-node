import express from 'express';
import { validateUser } from '../../middleware/userValidationMiddleware.js';
import { signJWT } from '../../middleware/jwtMiddleware.js';

const router = express.Router();

router.post('/login', (req, res) => {
  const { login, password } = req.body;

  // Query the credentials in the DataBase
  const user = validateUser(login, password);

  if (user) {
    const token = signJWT({ login: user.login });

    console.log(new Date().toUTCString() + ' [Loggin succesfull for ' + login + ']');
    res.json({ token: token });
  } else {
    console.log(new Date().toUTCString() + ' [Failed login attempt for ' + login + ']');
    res.status(401).json({ message: 'Credentials are not valid' });
  }
});

export default router;
