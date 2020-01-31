const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res)=> {
    res.send('Send GET request')
});
app.get('/:text', (req, res) => {
    res.send(req.params.text)
});
app.listen(port, () => {
    console.log('We are live on ' + port)
});