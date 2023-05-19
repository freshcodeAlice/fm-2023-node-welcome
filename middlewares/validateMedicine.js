const yup = require('yup');

const MEDICINE_SCHEMA = yup.object({
    name: yup.string('Name must be a string').required('Name is required'),
    price: yup.number('price must be a number').required('price is required'),
    quantity: yup.number('quantity must be a number').required('quantity is required'),
})

module.exports.validateMedicine = async (req, res, next) => {
    try {
        await MEDICINE_SCHEMA.validate(req.body);
        next();
    } catch(error) {
        res.status(400).send(error.message);
    }

} 