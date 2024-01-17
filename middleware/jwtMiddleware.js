const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret_phrase = process.env.SECRET_PHRASE;

const signJWT = (data) => {
  return jwt.sign(data, secret_phrase);
};

const verifyJWT = (token, callback) => {
  jwt.verify(token, secret_phrase, callback);
};

module.exports = {
  signJWT,
  verifyJWT,
};
