// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/', (req, res) => {
    res.send('docker');
});

app.listen(port, () => {
    console.log(`Server is listening at http://18.234.88.214:${port}`);
});

