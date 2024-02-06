import express from 'express';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.AUTH_SERVER_PORT;

app.use('/', authRoutes);


app.listen(port, () => {
  console.log(`AuthServer listening on port ${port}`);
});
