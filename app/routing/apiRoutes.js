// THIS WILL ROUTE TO FRIENDS.JS

const express = require("express");
const parser = require("body-parser");
const router = express.Router();

router.use(require('./htmlRoutes'));
router.use(require('../../server'));

//BODY PARSING FOR EXPRESS APP
router.use(parser.urlencoded({ extended: true }));
router.use(parser.json());

const friends = require('../data/friends');

router.get("/api/friends", function (req, res) {
    const chosen = req.params.friends;
    if (chosen) {
        console.log(chosen);
        friends.forEach(function () {
            if (chosen === friends[i].name) {
                return res.json(friends[i]);
            }
        });
        return res.json(false);
    }
    return res.json(friends);
});

router.post("/api/friends", function (req, res) {
    const newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});

module.exports = router;