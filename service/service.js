import express from 'express';
import dotenv from 'dotenv'

import serviceRoutes from './routes/serviceRoutes.js';

dotenv.config();


const app = express();
app.use(express.json());

const port = process.env.SERVICE_PORT

app.use('/', serviceRoutes);

app.listen(port, () => {
  console.log(`Service listening on port ${port}`)
})