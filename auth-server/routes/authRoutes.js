import express from 'express';
import { validateUser } from '../../utils/userValidation.js';
import { signJWT } from '../../utils/jwtUtils.js';
import SimpleLogger from '../../utils/simpleLogger.js';

const logger = new SimpleLogger();
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
