const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
let encodeText;
let decodeText;
app.get('/encode/:text', (req, res) => {
    encodeText = Vigenere.Cipher('password').crypt(req.params.text);
    res.send(encodeText)
});
app.get('/decode/:text', (req, res)=> {
    decodeText = Vigenere.Decipher('password').crypt(req.params.text);
    res.send(decodeText)
});
app.get('/', (req, res)=> {
    res.send('Hello')
});

app.listen(port, () => {
    console.log('We are live in ' + port)
});