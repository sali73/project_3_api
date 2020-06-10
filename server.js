//////////////////
// Dependencies
/////////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const productsController = require('./controllers/routes.js');
const usersController = require('./controllers/users.js');

////////////////////
// Global Variables
///////////////////
const {
    PORT = 3001,
    MONGO_URI = 'mongodb://localhost:27017/products',
} = process.env;
const db = mongoose.connection;

////////////////////
// db connection
///////////////////
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
db.once('open', () => console.log('connected to mongo at', MONGO_URI));
db.on('error', (err) => console.log('🚨🚨🚨', err));

/////////////////////
// CORS
////////////////////

// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//    origin: function (origin, callback) {
//        if (whitelist.indexOf(origin) !== -1) {
//            callback(null, true);
//        } else {
//            callback(new Error('Not allowed by CORS'));
//        }
//    },
// };


// middleware
// app.use(cors(corsOptions));
app.use(express.json());
app.use('/products', productsController);
app.use('/users', usersController);

// listen
/////////////
app.listen(PORT, () => console.log('listening on', PORT));