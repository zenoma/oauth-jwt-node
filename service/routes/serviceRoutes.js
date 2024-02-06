import express from 'express';
import {verifyJWT} from '../../middleware/jwtMiddleware.js'

const router = express.Router();

router.get('/', (req, res) => {

    const token = req.headers.authorization;

    if (token) {
      verifyJWT(token, (err, decoded) => {
        if (err) {
          console.log(new Date().toUTCString() + ' [Invalid token]')
          return res.status(401).json({ message: 'Invalid Token' });
        }
  
        console.log(new Date().toUTCString() + ' [Valid token usage for ' + decoded.login + ']')
        res.json({ message: "Data fetched", user: decoded.login });
      });
    } else {
      res.status(401).json({ message: 'Token not provided' });
    }
  });

export default router;
