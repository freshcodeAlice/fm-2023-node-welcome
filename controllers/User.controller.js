const fs = require('fs/promises');
const path = require('path');

module.exports.getUserSecurePage = (req, res) => {
    /// фінальна обробка запиту, дані провалідовано, маємо віддати сторінку
    const pathToFile = path.join(__dirname, '../views/secure-page.html');
    fs.readFile(pathToFile)
    .then(result => {
        res.send(result);
    })
}


