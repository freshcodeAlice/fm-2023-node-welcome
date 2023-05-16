const fs = require('fs/promises');

fs.readFile('./texts/citadelle.txt', {encoding: 'utf-8'})
.then(result => {
   const quotesArray = result.split('\n').filter(el => el);
   const randomIndex = Math.ceil(Math.random() * (quotesArray.length - 1));
   console.log(quotesArray[randomIndex]);
})