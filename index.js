const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(requestListener);

let counter = 0;

function requestListener(request, response) {
   console.log(request.url)
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
    response.end('File not found')
  }

  /// Опрацювати запит на /style.css і віддати його у відповідь
}

server.listen(3000);


/*
Задача: при запиті на localhost:3000/home віддавати статичний файлик index.html

1. Дізнатись, що запит був дійсно за тим шляхом, на який ми очікували
2. Віддати у відповідь статичний файл

*/