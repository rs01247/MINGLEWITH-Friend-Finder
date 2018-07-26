// THIS WILL ROUTE TO FRIENDS.JS

const express = require('express');
const parser = require('body-parser');
const router = express.Router();

// BODY PARSING FOR EXPRESS APP
router.use(parser.urlencoded({ extended: true }));
router.use(parser.json());

const friends = require('../data/friends');

// GET ROUTE FOR DISPLAYING FRIENDLIST ARRAY
router.get('/api/friends', function (req, res) {
    res.json(friends);
});

// POST ROUTE TO SEND SURVEY RESULTS TO FRIENDLIST
router.post('/api/friends', function (req, res) {
    console.log(req.body.scores);
    const newFriend = req.body;
    for (let i = 0; i < newFriend.scores.length; i++) {
        newFriend.scores[i] = Number(newFriend.scores[i]);
    }

    let friendIndex = 0;
    let minimumDifference = 40;

    for (let i = 0; i < friends.length; i++) {
        let totalDifference = 0;
        for (let j = 0; j < friends[i].scores.length; j++) {
            let difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
        }

        if (totalDifference < minimumDifference) {
            friendIndex = i;
            minimumDifference = totalDifference;
        }
    }   

    friends.push(newFriend);
    res.json(friends[friendIndex]);

});
// 
module.exports = router;    