import express from 'express';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv'
import DummyLogger from '../utils/simpleLogger.js';

const logger = new DummyLogger();

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.AUTH_SERVER_PORT;

app.use('/', authRoutes);


app.listen(port, () => {
  logger.log(`AuthServer listening on port ${port}`);
});
