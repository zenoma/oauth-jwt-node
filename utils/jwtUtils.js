import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const secret_phrase = process.env.SECRET_PHRASE;

export const signJWT = (data) => {
  return jwt.sign(data, secret_phrase);
};

export const verifyJWT = (token, callback) => {
  jwt.verify(token, secret_phrase, callback);
};

