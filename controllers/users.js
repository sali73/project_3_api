// dependencies
const express = require('express');
const users = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

// New User Authentication
users.post('/', (req, res) => {
    // destructure username and password out of request
    const { username, password } = req.body;
    // make sure both fields were entered
    if (!username || !password) {
        return res.status(400).json({ message: 'Please enter a Username and Password' });
    }
    // check for password length requirement
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }
    // Check passwprd for at least one of each:
    // - Uppercase Letter
    // - Lowercase Letter
    // - number
    // - special character
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/g)) {
        return res.status(400).json({ message: 'Password does not meet the requirements' })
    }
    // check if username already exists
    User.findOne({ username })
        .then(user => {
            if (user) return res.status(400).json({ message: 'Username already exists' });
            // if not, create new User object
            const newUser = new User({
                username,
                password,
            });
            // encrypt new user password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            res.json({
                                user: {
                                    _id: user._id,
                                    username: user.username,
                                }
                            })
                        })
                })
            } )
            // add user to the database
            User.create(newUser)
        })
});

module.exports = users;