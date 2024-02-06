import express from 'express';
import {verifyJWT} from '../../utils/jwtUtils.js';
import SimpleLogger from '../../utils/simpleLogger.js';

const logger = new SimpleLogger();
const router = express.Router();

router.get('/', (req, res) => {

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      logger.log('Token not provided');
      return res.status(401).json({ message: 'Token not provided' });
  }

  const token = authorizationHeader.split(' ')[1];

    if (token) {
      verifyJWT(token, (err, decoded) => {
        if (err) {
          logger.log(`Invalid token`)
          return res.status(401).json({ message: 'Invalid Token' });
        }
  
        logger.log(`Valid token usage for ${decoded.login}`)
        res.json({ message: "Data fetched", user: decoded.login });
      });
    } else {
      res.status(401).json({ message: 'Token not provided' });
    }
  });

export default router;
