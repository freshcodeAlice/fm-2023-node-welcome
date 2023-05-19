const express = require('express');
const app = express();
const bodyParser = express.json();
const {validateMedicine} = require('./middlewares/validateMedicine');
const MedicineController = require('./controllers/Medicine.controller');

app.post('/medicine', bodyParser, validateMedicine, MedicineController.addMedicine);
app.get('/medicine', MedicineController.getAll);
app.get('/medicine/:name', MedicineController.getOne);
app.delete('/medicine/:name', MedicineController.deleteOne);
app.patch('/medicine', bodyParser, MedicineController.updateQuantity);

/*
/medicine?name=ibuprofen - query-params
*/

app.listen(3000);


/*
+1. Реалізуйте оновлення кількості ліків на складі
- метод PUT або PATCH
- зчитати тіло повідомлення
- реалізувати метод моделі, який оновить кількість
- в контроллері використати метод моделі
- надіслати у відповідь оновлений об'єкт ліків


+ 2. Реалізуйте видалення конкретних ліків з бази

*/