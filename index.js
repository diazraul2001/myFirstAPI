const { response } = require('express');
const express = require('express');
const app = express();

const myFirstController = require('./controllers/myFirstController');

app.get('/', myFirstController.helloWorld);

app.listen(3000, () => {
    console.log('My first API running!');
})