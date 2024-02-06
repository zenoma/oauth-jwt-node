import dotenv from 'dotenv'
import SimpleLogger from '../utils/simpleLogger.js';
import ClientCustomError from './errors/ClientCustomError.js';

const logger = new SimpleLogger();
dotenv.config();

const AUTH_SERVER_URL  = `${process.env.BASE_URL}:${process.env.AUTH_SERVER_PORT}`;
const SERVICE_URL = `${process.env.BASE_URL}:${process.env.SERVICE_PORT}`;


const loginCredentials = {
  login: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
};

const getToken = async () => {
  try {
    logger.log(`Fetch token from Auth Server using credentials`);
    const response = await fetch(`${AUTH_SERVER_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginCredentials),
    });


    if (!response.ok) {
      throw new ClientCustomError('Failed to fetch token', response.statusText);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error(error.toString());
  }
};

const getDataFromService = async (token) => {
  try {
    logger.log(`Fetch data from Service with the obtained token`);
    const response = await fetch(SERVICE_URL, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`},
    });

    if (!response.ok) {
      throw new ClientCustomError('Failed to fetch data', response.statusText);
    }

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error.toString());
  }
};

const main = async () => {
  try {
    const token = await getToken();
    await getDataFromService(token);
  } catch (error) {
    console.error(new Date().toUTCString() + ' [Tasks failed -', error.message + ']');
  }
};

main();