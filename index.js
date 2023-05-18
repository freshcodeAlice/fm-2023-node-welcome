const express = require('express');

const app = express();

app.get('/index', handler);
app.post('/users', userHandler);

/*
Endpoint (ручка) - метод + шлях запиту
*/

function handler(req, res) {
    console.log(req.url);
    res.end('hello, world');

}


function userHandler(req, res) {
    res.status(400).end('user cannot be created')
}


app.listen(3000);