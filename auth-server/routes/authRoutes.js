const express = require('express');
const jwtMiddleware = require('../../middleware/jwtMiddleware');
const userValidationMiddleware = require('../../middleware/userValidationMiddleware');

const router = express.Router();

router.post('/login', (req, res) => {
  const { login, password } = req.body;

  // Query the credentials in the DataBase
  const user = userValidationMiddleware.validateUser(login, password);

  if (user) {
    const token = jwtMiddleware.signJWT({ login: user.login });

    console.log(new Date().toUTCString() + ' [Loggin succesfull for ' + login + ']');
    res.json({ token: token });
  } else {
    console.log(new Date().toUTCString() + ' [Failed login attempt for ' + login + ']');
    res.status(401).json({ message: 'Credentials are not valid' });
  }
});

module.exports = router;
