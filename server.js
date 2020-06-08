// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// globals
const {
    PORT = 3001,
    MONGO_URI = 'mongodv://localhost:27017' // fill in db name 
} = process.env;
const db = mongoose.connection;

// db connection
// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true,
// });
// db.once('open', () => console.log('connected to mongo at', MONGO_URI));
// db.on('error', (err) => console.log('🚨 mongodb error:', err));

// middleware
app.use(express.json());
// app.use('/products', products);

// test ========== DELETE before submit
app.get('/', (req, res) => {
    res.send('Hello World');
})

// listen
app.listen(PORT, () => console.log('listening on', PORT));