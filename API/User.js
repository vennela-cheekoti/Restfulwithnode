const express = require('express');
const mongoose = require('mongoose');
const User = require('../DbConnection/User');
const route = express.Router();

route.get("/", (req, res) => {
    User.find((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  });
  
  route.post("/adduser", (req, res) => {
    let user = new User(req.body);
    user
      .save()
      .then(user => {
        res.status(200).send("success");
      })
      .catch(err => {
        res.status(400).send("Failed");
      });
  });
  

  
  module.exports = route;