const mongoose = require('mongoose');
const Products = require('./produtcs');


const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Users',
        required: [true, 'Please add user ID']
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
        }
    });


const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;

// type: mongoose.Schema.ObjectId,

