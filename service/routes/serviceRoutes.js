import express from 'express';
import { verifyJWT } from '../../utils/jwtUtils.js';
import SimpleLogger from '../../utils/simpleLogger.js';

const logger = new SimpleLogger();
const router = express.Router();

router.get('/', async (req, res) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    logger.log('Token not provided');
    return res.status(401).json({ message: 'Token not provided' });
  }

  const token = authorizationHeader.split(' ')[1];
  try {
    const decoded = await verifyJWT(token);

    if(!decoded){
      throw new Error("Invalid token")
    }

    logger.log(`Valid token usage for ${decoded.login}`);
    return res.json({ message: 'Data fetched', user: decoded.login });
    
  } catch (error) {
    logger.log(`Invalid token`);
    return res.status(401).json({ message: 'Invalid Token' });
  }
});

export default router;
