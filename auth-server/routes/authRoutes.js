import express from 'express';
import { validateUser } from '../../middleware/userValidationMiddleware.js';
import { signJWT } from '../../middleware/jwtMiddleware.js';
import DummyLogger from '../../utils/simpleLogger.js';

const logger = new DummyLogger();
const router = express.Router();

router.post('/login', (req, res) => {
  const { login, password } = req.body;

  // Query the credentials in the DataBase
  const user = validateUser(login, password);

  if (user) {
    const token = signJWT({ login: user.login });

    logger.log(`Loggin succesfull for ${login}`);
    res.json({ token: token });
  } else {
    logger.log(`Failed login attempt for ${login}`);
    res.status(401).json({ message: 'Credentials are not valid' });
  }
});

export default router;
