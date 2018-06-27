'use strict';

const express = require('express');

// Constants
const port = 8080;
const host = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(port, host);
console.log(`Running Express server on http://${port}:${port}`);