'use strict';

const express = require('express');

// Constants
const port = 8080;
const host = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, k8s BBL!\n');
});

app.listen(port, host);
console.log(`Running Express server on http://${host}:${port}`);