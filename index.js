const {MyMath} = require('./MyMath');
const MyComponent = require('./MyComponent');
const file = require('./NewFile');
const abracadabra = require('./fdksjhfkjshdfsdf');
console.log(file);

const res = MyMath.sum(3,4);


const com = new MyComponent();
//console.log(com.render(res));


/*
HOW REQUIRE WORKS
1. Resolving - шукає файл за заданою (переданою) адресою
    1.1 Core modules (модулі ядра)
    1.2 Node_modules (npm-пакети, які пов'язані з нашим проектом)
    1.3 Шукає в папці проєкту
        1.3.1 Вважаємо, що шукаємо file
            *.js
            *.json
        1.4.1 Вважаємо, що шукаємо директорію
            package.json  -> "main": "./entry.js" 
    1.4 - throw new Error - якщо не знайшов файл, викидає помилку
2. Loading - завантаження файлу, який він знайшов
3. Wrapping - огортає контекстом виконання та вбудовує певні об'єкти всередину файлу модуля
4. Evaluation - виконання коду модуля
5. Caching - кешування (запам'ятовування) результату виконання 
*/

//console.log(globalThis); // Об'єктне представлення Ноди. Таймаути, інтервали, і т.д.

// console.log(setTimeout(()=>{
//     console.log('tick')
// }, 10000));

//console.log(process); // Об'єктне представлення процессу ноди в операційній системі