// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// global variables
const {
    PORT = 3001,
    MONGO_URI = 'mongodb://localhost:27017/products',
} = process.env;

const db = mongoose.connection;
const products = require('./models/products');

// db connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
});
db.once('open', () => console.log('connected to mongo at', MONGO_URI));
db.on('error', (err) => console.log('🚨🚨🚨', err));

// middleware
app.use(express.json());
app.use('/products', products);

// test ============================🚧🚧🚧 DELETE BEFORE SUBMIT 🚧🚧🚧
app.get('/', (req, res) => {
    res.send('Hello World');
})

// listen
app.listen(PORT, () => console.log('listening on', PORT));