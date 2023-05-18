const express = require('express');
const app = express();
const bodyParser = express.json();
/*
bodyParser зчитує і парсить як JSON body повідомлення (запиту) і дописує готовий js-об'єкт в поле  req.body
ОБОВ'ЯЗКОВА УМОВА!
Для того, щоб bodyParser зчитав тіло повідомлення як json-об'єкт, повідомлення (HTTP-запит) обов'язково має супроводжуватись конкретним заголовком запиту
Content-Type: application/json
*/
const {handler, handler2, handler3} = require('./controllers/User.controller');
const {validateUserAccess} = require('./middlewares/validateUser');

app.post('/index', bodyParser, handler);  // У всьому ланцюжку обробки req, res будуть одними і тими самими об'єктами, що передаються за посиланням.
app.post('/product', validateUserAccess,  handler2);
app.post('/users', validateUserAccess, handler3);


app.listen(3000);