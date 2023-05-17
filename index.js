const http = require('http');

const server = http.createServer(requestListener);

function requestListener(request, response) {
    response.end('Hello from node');
}

server.listen(3000);


/*
Напишіть сервер, який на запити відповідає числом запитів, які вже були зроблені на цей сервер

*/