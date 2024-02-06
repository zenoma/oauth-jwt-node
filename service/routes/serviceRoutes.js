import express from 'express';
import {verifyJWT} from '../../middleware/jwtMiddleware.js'
import DummyLogger from '../../utils/simpleLogger.js';

const logger = new DummyLogger();
const router = express.Router();

router.get('/', (req, res) => {

    const token = req.headers.authorization;

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
