// ROUTES TO THE HOME AND SURVEY HTML PAGES

const path = require('path');
const express = require('express');
// const app = express();

const router = express.Router();

//ROUTE FOR HOME PAGE
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

//ROUTE TO TAKE USER TO SURVEY
router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
})

module.exports = router;