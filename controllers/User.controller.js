
module.exports.handler = (req, res) => {
    console.log(req.body)
    res.end('index');
}

module.exports.handler2 = (req, res) => {

    res.end('products');

}

module.exports.handler3 = (req, res) => {
const users = [{
    firstName: 'John',
    lastName: 'Doe'
}, {
    firstName: 'Jake',
    lastName: 'Snow'
}, {
    firstName: 'Josh',
    lastName: 'Goe'
}]
    
res.send(users);

}