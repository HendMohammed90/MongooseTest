const mongoose = require('mongoose');

  const VendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    address:{
        type :String ,
        required: [true, 'Please add your address']

    },
    phone :{
        type :Number ,
        required: [true, 'Please add a phone number']

    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
});


const Vendors = mongoose.model('Vendors', VendorSchema);

module.exports = Vendors ;
