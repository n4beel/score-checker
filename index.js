const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//express ke new version me cors ka masla ha islye 4.16.4 use kara ha "npm i express@4.16.4"
//for listening requests and keep running
app.listen(3000, () => {
    console.log('app is listening!!')
})


app.use('/', require('./routes/index'));

