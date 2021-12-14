const { response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')
const connect = require(`./database/connect`);


require('dotenv').config();
console.log(process.env.DB_URL)
connect.createConnection();


app.use(cors());
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

const myFirstController = require('./controllers/myFirstController');

app.get('/', myFirstController.helloWorld);

app.use('/api/v1/user', require('./routes/userRoutes.js'));
app.use('/api/v2/time', require('./routes/timeRoutes.js'));
app.use('/api/v3/s06', require('./routes/ex1S06Routes.js'));
// app.use('/api/v3/s07', require('./routes/exs07Routes.js'));

app.listen((process.env.PORT || 3000), function() {
    console.log(`My first API running on port ${process.env.PORT}!`);
})