// THIS WILL ROUTE TO FRIENDS.JS

const express = require("express");
const parser = require("body-parser");
const app = express();

//BODY PARSING FOR EXPRESS APP
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const friends = require('../data/friends');

app.get("/api/friends", function (req, res) {
    const chosen = req.params.friends;
    if (chosen) {
        console.log(chosen);
        friends.forEach(function (element) {
            if (chosen === friends[i].name) {
                return res.json(friends[i]);
            }
        });
        return res.json(false);
    }
    return res.json(reservations);
});

app.post("/api/new", function (req, res) {
    const newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});