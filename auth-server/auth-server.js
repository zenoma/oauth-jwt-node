const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

const port = process.env.AUTH_SERVER_PORT;

app.use('/', authRoutes);


app.listen(port, () => {
  console.log(`AuthServer listening on port ${port}`);
});
