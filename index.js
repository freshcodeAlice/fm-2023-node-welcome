const http = require('http');

const server = http.createServer(requestListener);

let counter = 0;

function requestListener(request, response) {
    response.end(`Server session counter: ${++counter}`);
}

server.listen(3000);


/*
Напишіть сервер, який на запити відповідає числом запитів, які вже були зроблені на цей сервер

*/