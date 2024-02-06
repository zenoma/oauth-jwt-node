const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
app.use(express.json());

const port = process.env.SERVICE_PORT

app.use('/', serviceRoutes);

app.listen(port, () => {
  console.log(`Service listening on port ${port}`)
})