import dotenv from 'dotenv'

dotenv.config();

const authServerURL = process.env.BASE_URL + ':' + process.env.AUTH_SERVER_PORT;
const serviceURL = process.env.BASE_URL + ':' + process.env.SERVICE_PORT;


test('givenValidToken_whenGet_thenObtainedData', async () => {
    const credentials = {
      login: 'user@email.com',
      password: '12345678',
    };
  
    const authResponse = await fetch(`${authServerURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
        
    const authResponseBody = await authResponse.json();

    const token = authResponseBody.token;

    const serviceResponse = await fetch(serviceURL, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });

    const serviceResponseBody = await serviceResponse.json();

    expect(serviceResponse.status).toBe(200);
    const expectedJson = {
        "message": "Data fetched",
        "user": "user@email.com"
      }
    expect(serviceResponseBody).toEqual(expectedJson);
  });


  test('givenInvalidToken_whenGet_then401', async () => {
        const token = "Invalid_token"

        const serviceResponse = await fetch(serviceURL, {
        method: 'GET',
        headers: { Authorization: token },
      });

    const serviceResponseBody = await serviceResponse.json();

    expect(serviceResponse.status).toBe(401);

    const expectedJson = {
        "message": "Token not provided",
      }

    expect(serviceResponseBody).toEqual(expectedJson);
  });