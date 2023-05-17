const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(requestListener);

let counter = 0;

function requestListener(request, response) {
    if(request.method === 'GET') {
        if(request.url === '/home') {
            fs.readFile('./views/index.html', 'utf-8')
            .then(data => {
                response.statusCode = 200;
                response.end(data);
            })
          } else if (request.url === '/style.css') {
            fs.readFile('./views/style.css', 'utf-8')
            .then(data => {
                response.end(data);
            })
          } else {
            response.statusCode = 404;
            fs.readFile('./views/404.html', 'utf-8')
            .then(data => {
                response.end(data);
            })
          }
    } else if (request.method === 'POST') {
        if(request.url === '/users'){
            /* Отримання даних відбувається в асинхронному форматі за допомогою ReadableStream.
                +Коли дані приходять, стається подія 'data'
                Коли дані всі прийшли, стається подія 'end'
            */  
            
                let stringFromChunk = '';

                request.on('data', (chunk) => {
                    stringFromChunk += chunk
                });
            
                request.on('end', async () => {
                    const userData = JSON.parse(stringFromChunk);
                    try {
                        await writeUserToFile(userData);
                        response.statusCode = 201;
                        response.end('User successfully created')
                    } catch (error) {
                        response.statusCode = 400;
                        response.end('Oops');
                    }
                })
                   

        } else if (request.url === '/login') {
            let stringFromChunk = '';
            request.on('data', (chunk) => {
                stringFromChunk += chunk
            });

            request.on('end', async () => {
                const userData = JSON.parse(stringFromChunk);
                
                try {
                   const readedText = await readUserData();
                   const savedData = JSON.parse(readedText);

                   if(userData.email === savedData.email && userData.password === savedData.password) {
                    response.statusCode = 200;
                    response.end('Login successfull');
                   } else {
                    response.statusCode = 401;
                    response.end('User data is invalid');
                   }

                } catch (error) {
                    response.statusCode = 400;
                    response.end('Oops');
                }

            })
        }
    }
}

server.listen(3000);


/*

Задача: зареєструвати нового юзера.
*прийняти дані (логін, пароль, ім'я, прізвище) і записати їх у .txt
*/


async function writeUserToFile(userData) {
    return fs.appendFile('./data/userData.txt', JSON.stringify(userData), 'utf-8');
}

/*
Створити файл з мейлом і паролем юзера
Прийняти запит на адресу /login з методом POST. Запит має містити логін та пароль
Зчитати вміст файлу, розпарсити як js-об'єкт.
Перевірити, чи співпадають дані, переслані з клієнта з тими даними які ви зчитали   
*/

async function readUserData() {
    return fs.readFile('./data/loginData.txt', 'utf-8');
}
