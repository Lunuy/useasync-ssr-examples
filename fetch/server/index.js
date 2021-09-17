

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

let count = 0;
app.get('/count', (req, res) => {
    count++;
    res.status(200).send(String(count)).end();
});

app.listen(3001);