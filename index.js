const express = require('express');
const app = express();
const {handler, handler2, handler3} = require('./controllers/User.controller');
const {validateUserAccess} = require('./middlewares/validateUser');

app.get('/index', validateUserAccess, handler);  // У всьому ланцюжку обробки req, res будуть одними і тими самими об'єктами, що передаються за посиланням.
app.get('/product', validateUserAccess,  handler2);
app.get('/users', validateUserAccess, handler3);


app.listen(3000);