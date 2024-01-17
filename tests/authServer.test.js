const dotenv = require('dotenv');
dotenv.config();

const authServerURL = process.env.BASE_URL + ':' + process.env.AUTH_SERVER_PORT;

test('givenValidData_whenLogin_then200AndValidToken', async () => {
  const credentials = {
    login: 'user@email.com',
    password: '12345678',
  };

  const response = await fetch(`${authServerURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const responseBody = await response.json();

  expect(response.status).toBe(200);
  expect(responseBody.token).toBeTruthy();
});

test('givenInvalidData_whenLogin_then401', async () => {
  const credentials = {
    login: 'invalid_user',
    password: 'invalid_password',
  };

  const response = await fetch(`${authServerURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const responseBody = await response.json();

  expect(response.status).toBe(401);
  expect(responseBody.message).toBe('Credentials are not valid');
});
