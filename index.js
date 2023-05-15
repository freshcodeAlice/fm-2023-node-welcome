const cart = {
    userId: 3,
    date: '2023-05-15',
    products:[{productId:1,quantity:3}]
}



fetch('https://fakestoreapi.com:443/carts/7', {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(cart)
})
.then(res => res.json())
.then(data => console.log(data));


/* GET-request
GET https://fakestoreapi.com:443/products/1  HTTPS
Content-type: application/json

*/

/* PUT-request

PUT 'https://fakestoreapi.com:443/carts/7' HTTPS
Content-type: application/json

{
    "firstName": "John",
    "lastName": "Doe"
}



*/