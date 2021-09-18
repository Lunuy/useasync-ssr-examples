

const express = require('express');
const cors = require('cors');

const PORT = process.env.NODE_ENV === 'development' ? 3001 : 80;

const app = express();
app.use(cors({ origin: '*' }));

let count1 = 0;
let count2 = 0;
app.get('/count1', (req, res) => {
    count1++;
    res.status(200).send(String(count1)).end();
});
app.get('/count2', (req, res) => {
    count2++;
    res.status(200).send(String(count2)).end();
});

app.listen(PORT);