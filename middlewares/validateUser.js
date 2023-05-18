const yup = require('yup');

const EMAIL_SCHEMA = yup.object({
    email: yup.string().email('Email is not valid email').required()
})

const admin = {
    "email": "supermail.com",
    "password": "admin"
}


/*
Endpoint (ручка) - метод + шлях запиту
*/

module.exports.validateUserAccess = (req, res, next) => {  
    ///req.body
    const {body: userData} = req;
    for (key in admin) {
        if(admin[key] !== userData[key]) {
            return res.status(400).send('You shall not pass')
        }
    }
    //// ми дійшли до кінця циклу, все перевірили, все співпадає
    next()
}



module.exports.validateEmail = async (req, res, next) => {
    try {
        await EMAIL_SCHEMA.validate(req.body);
    } catch (error) {
       return res.status(400).send(error.message)
    }
    
    next();
}