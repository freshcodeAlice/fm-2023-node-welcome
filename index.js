const express = require('express');
const app = express();
const bodyParser = express.json();
const {getUserSecurePage, saveVisitorMail} = require('./controllers/User.controller');
/*
bodyParser зчитує і парсить як JSON body повідомлення (запиту) і дописує готовий js-об'єкт в поле  req.body
ОБОВ'ЯЗКОВА УМОВА!
Для того, щоб bodyParser зчитав тіло повідомлення як json-об'єкт, повідомлення (HTTP-запит) обов'язково має супроводжуватись конкретним заголовком запиту
Content-Type: application/json
*/
const {validateUserAccess, validateEmail} = require('./middlewares/validateUser');

app.post('/secure-page', bodyParser, validateUserAccess, getUserSecurePage);  // У всьому ланцюжку обробки req, res будуть одними і тими самими об'єктами, що передаються за посиланням.
app.post('/page', bodyParser, validateEmail, saveVisitorMail); 

app.listen(3000);



/*
Отримати дані юзера, перевірити валідність мейлу (що він схожий на мейл), якщо так - дописати до текстового файлу "відвідувачі" мейл юзера

Задачка з *: валідувати дані юзера за допомогою бібліотеки yup

Задачка 2: реалізувати додатковий роут (маршрут) для методу GET за адресою '/visitors'
і віддавати за цим запитом вміст файлу відвідувачів (масив мейлів користувачів)  

['mail@fds.com', 'mail2.com']
*/