const usersDB = [
    { login: 'user@email.com', password: '12345678' },
  ];
  
export const validateUser = (login, password) => {
  return usersDB.find((u) => u.login === login && u.password === password);
};
   