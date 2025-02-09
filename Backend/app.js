const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const useRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');


connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', useRoutes);
app.use('/captains', captainRoutes);


module.exports = app;