// dependencies
const express = require('express');
const app = express();

// Port 3001 - React will live on 3000
const PORT = process.env.PORT || 3001

// middleware


// test
app.get('/', (req, res) => {
    res.send('Hello World');
})

// listen
app.listen(PORT, () => console.log('listening on', PORT));