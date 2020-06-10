// dependencies
const express = require('express');
const users = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');
const jwt = require('jsonwebtoken');
const {
    SECRET = 'shhh its a secret'
} = process.env

//////////////////////////
// Login Authentication
//////////////////////////

users.post('/', (req, res) => {

    // destructure username and password out of request
    const { username, password } = req.body;
    // make sure both fields were entered
    if (!username || !password) {
        return res.status(400).json({ message: 'Please enter a Username and Password' });
    }
    // check if username is valid
    User.findOne({ username })
    .then(user => {
        if (!user) return res.status(400).json({ message: 'Username and/or Password is invalid' });
            
        // validate password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (!isMatch) return res.status(400).json({ message: 'Username and/or Password is invalid' });

                // sign jasonwebtoken
                jwt.sign(
                    // Payload (json object)
                    { _id: user._id },
                    // Secret
                    SECRET,
                    // Expiration object 
                    // - optional - this is set to 1 hour:
                    { expiresIn: 1000 * 60 * 60 * 1 },
                    // Callback
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                _id: user._id,
                                username: user.username,
                            }
                        })    
                    },
                )
            })
        })
});

module.exports = users;