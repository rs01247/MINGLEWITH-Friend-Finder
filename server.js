// DEPENDENCIES
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const routes = require('./app/routing/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

//BODY PARSING FOR EXPRESS APP
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use('/', routes);

app.listen(PORT, function (){
    console.log(`Listening on ${PORT}`);
});