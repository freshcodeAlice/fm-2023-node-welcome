const {Medicine, MedicineDB} = require('../models/Medicine');



module.exports.addMedicine = async (req, res) => {
    // req.body -> {name, price, quantity}
    const {name, price, quantity} = req.body;
    console.log(req.body);
    try {
        const med = new Medicine(name, price, quantity);
        const createdMed = await MedicineDB.addNewMedicine(med);
        res.status(201).send(createdMed);
    } catch(error) {
        console.log(error);
    }

}

module.exports.getAll = async (req, res) => {
    try {
        const medArray =  await MedicineDB.getAllMedicine();
        res.status(200).send(medArray);
    } catch(error) {
        console.log(error);
    }

} 


module.exports.getOne = async(req, res) => {
    try {
        const { name }= req.params;
        const med = await MedicineDB.getOneMedicine(name);
        res.status(200).send(med);
    } catch(error) {

    }
}


module.exports.deleteOne = async(req, res) => {
    try {
        const { name }= req.params;
        const med = await MedicineDB.deleteMedicine(name);
        res.status(200).send(med);
    } catch(error) {
        console.log(error);
    }
}

module.exports.updateQuantity = async (req, res) => {
    try {
        // req.body -> 
        const {name, quantity} = req.body;
        const updated = await MedicineDB.updateQuantity(name, quantity);
        res.status(200).send(updated);
    } catch(error) {
        console.log(error);
    }
}