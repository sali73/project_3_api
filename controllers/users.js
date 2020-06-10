const express = require('express');
const users = express.Router();

const User = require('../models/users.js');

users.get('/', (req, res) => {
    res.send('register');
});

module.exports = users;