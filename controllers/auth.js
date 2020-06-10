// dependencies
const express = require('express');
const auth = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');