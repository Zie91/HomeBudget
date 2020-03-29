const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const test = require('./routes/api/test');


const app = express();

app.use(bodyParser.json());

app.use('/api/test', test);

const port = process.env.PORT || 5000;

app.listen( port, ()=>{
    console.log('Server running on port', port);
});
