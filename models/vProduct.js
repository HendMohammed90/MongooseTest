const mongoose = require('mongoose');

const VendorProductSchema = new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'vendor',
        required: [true, 'Please add vendor ID']
    },
    products: [{
        productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        // amount : Number,
        required: true
    },
    amount : {
        type :Number ,
        required  : true  
    }}
],
    date: {
        type: Date,
        default: Date.now,
        } ,

    totalPrice : {
        type : Number
    }
    });


const VendorsPro = mongoose.model('VendorsPro', VendorProductSchema);

module.exports = VendorsPro;

