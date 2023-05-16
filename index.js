const fs = require('fs/promises');

fs.readFile('./texts/citadelle.txt', 'utf-8')
.then(result => {
   const quotesArray = result.split('\n').filter(el => el);
   const randomIndex = Math.ceil(Math.random() * (quotesArray.length - 1));
//    console.log(quotesArray[randomIndex]);
    // fs.writeFile('./quote.txt', quotesArray[randomIndex]);
    fs.appendFile('./anotherQuote.txt', quotesArray[randomIndex] + '\n', 'utf-8');
})


// fs.writeFile('./quote.txt', 'Some another quote');