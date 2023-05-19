const map = new Map();

class MedicineDB {

    static async addNewMedicine(med) {
        map.set(med.name, med);
        return med;
    }

    static async getAllMedicine() {
        const values = [...map.values()];
        return values;
    }

    static async getOneMedicine(name) {
        return map.get(name);
    }

    static async deleteMedicine(name) {
       return map.delete(name);
    }

    static async update({name, price, quantity,}) {
        const med = map.get(name);
        med.price = price;
        med.quantity = quantity;
       return map.set(name, med);
    }
}





class Medicine {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get name() {
        return this._name;
    }
     set name(v) {
        this._name = v;
    }

    get price() {
        return this._price;
    }
     set price(v) {
        if (typeof v !== 'number') {
            throw new TypeError('price must be a number')
        }
        this._price = v;
    }

    get quantity() {
        return this._quantity;
    }
     set quantity(v) {
        if (typeof v !== 'number') {
            throw new TypeError('quantity must be a number')
        }
        this._quantity = v;
    }
}


module.exports = {
    Medicine, MedicineDB
}