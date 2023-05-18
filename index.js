const express = require('express');
const app = express();
const bodyParser = express.json();
const {getUserSecurePage} = require('./controllers/User.controller');
/*
bodyParser зчитує і парсить як JSON body повідомлення (запиту) і дописує готовий js-об'єкт в поле  req.body
ОБОВ'ЯЗКОВА УМОВА!
Для того, щоб bodyParser зчитав тіло повідомлення як json-об'єкт, повідомлення (HTTP-запит) обов'язково має супроводжуватись конкретним заголовком запиту
Content-Type: application/json
*/
const {validateUserAccess} = require('./middlewares/validateUser');

app.post('/secure-page', bodyParser, validateUserAccess, getUserSecurePage);  // У всьому ланцюжку обробки req, res будуть одними і тими самими об'єктами, що передаються за посиланням.


app.listen(3000);



/*
Отримати дані юзера, перевірити їх, якщо вони валідні - віддати йому статичну сторінку
Декомпозиція:
1. Отримати запит і обробити його
2. Провалідувати дані
3. Зчитати статичний файл і віддати його у відповідь

*/