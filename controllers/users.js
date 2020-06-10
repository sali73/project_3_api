const express = require('express');
const users = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/users.js');

// New User Authentication
users.post('/', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Please enter a Username and Password' });
    }
    User.findOne({ username })
        .then(user => {
            if (user) return res.status(400).json({ message: 'Username already exists' });

            const newUser = new User({
                username,
                password,
            });
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
            User.create(newUser)
        })
});

module.exports = users;