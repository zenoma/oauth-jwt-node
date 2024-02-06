import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import SimpleLogger from './simpleLogger.js';

dotenv.config();
const logger = new SimpleLogger();

const SECRET_PHRASE = process.env.SECRET_PHRASE;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const signJWT = (data) => {  
  const expiresIn = process.env.JWT_EXPIRES_IN || '1h';

  return jwt.sign(data, SECRET_PHRASE, { expiresIn});
};

export const verifyJWT = async (token) => {
  if (!token) {
    logger.log('No token provided');
    return false;
  }

  try {
    const decoded = await jwt.verify(token, SECRET_PHRASE);
    return decoded;
  } catch (error) {
    logger.log('Invalid token');
    return false;
  }
};

