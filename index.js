const { response } = require('express');
const express = require('express');
const app = express();

const myFirstController = require('./controllers/myFirstController');

app.get('/', myFirstController.helloWorld);

app.listen((process.env.PORT || 3000, function() {
    console.log('My first API running!');
})