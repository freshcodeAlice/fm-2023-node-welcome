const express = require('express');
const app = express();
const bodyParser = express.json();
const {validateMedicine} = require('./middlewares/validateMedicine');
const MedicineController = require('./controllers/Medicine.controller');

app.post('/medicine', bodyParser, validateMedicine, MedicineController.addMedicine);
app.get('/medicine', MedicineController.getAll);
app.get('/medicine/:name', MedicineController.getOne);

/*
/medicine?name=ibuprofen - query-params
*/

app.listen(3000);


/*
Реалізувати запит на отримання всіх ліків.


*/