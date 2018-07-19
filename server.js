// DEPENDENCIES
const express = require('express');
const parser = require('body-parser');
const routes = require('./app/routing/htmlRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// BODY PARSING FOR EXPRESS APP
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// USING CSS AND APP.JS FILES
app.use(express.static(path.join(__dirname, 'app/public')));

app.use('/', routes);

app.listen(PORT, function (){
    console.log(`Listening on ${PORT}`);
});