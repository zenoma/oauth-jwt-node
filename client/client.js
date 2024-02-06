import dotenv from 'dotenv'

dotenv.config();

const authServerURL = process.env.BASE_URL + ':' + process.env.AUTH_SERVER_PORT;
const serviceURL = process.env.BASE_URL + ':' + process.env.SERVICE_PORT;

const loginCredentials = {
  login: 'user@email.com',
  password: '12345678',
};

const getToken = async () => {
  try {
    console.log(new Date().toUTCString() + ' [Fetch token from Auth Server using credentials]');
    const response = await fetch(`${authServerURL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginCredentials),
    });


    if (!response.ok) {
      throw new Error( new Date().toUTCString() + ` [Failed to fetch token - ${response.statusText}]`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error(new Date().toUTCString() + ' [Unable to fetch token -', error.message + ']');
    throw error;
  }
};

const getDataFromService = async (token) => {
  try {
    console.log(new Date().toUTCString() + ' [Fetch data from Service with the obtained token]');
    const response = await fetch(serviceURL, {
      method: 'GET',
      headers: { Authorization: token },
    });

    if (!response.ok) {
      throw new Error(new Date().toUTCString() + ` [Failed to fetch data - ${response.statusText}]`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
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