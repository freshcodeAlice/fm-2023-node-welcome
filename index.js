const fs = require('fs/promises');

/*
Написати функцію, яка раз в секунду дописує до файлу-логгеру рядок з текстом вигляду: "Some error happens at 2023-05-16T08:19:55.285Z"


Повторити це протягом 10 секунд

*/

function log() {
    fs.appendFile('./error-logger.txt', `Some error happens at ${new Date()} \n`, 'utf-8');
}

function createTimerLogger () {

    let i = 0;
    setTimeout(function repeat() {
        i++;
        log();
        if(i < 10) {
            let timeout = setTimeout(repeat, 1000);
        } 
    }, 1000)
    
}

//createTimerLogger();



/*
Створити файл з будь-яким текстовим вмістом. Прочитати цей файл, і створити новий, який складатиметься з інформації старого файлу + якогось нового тексту


*/

fs.readFile('./oldText.txt', 'utf-8')
.then(result => {
    fs.writeFile('./newFile.txt', result + '\n New file content added in the end', 'utf-8');
})