const express = require("express");
const Users = require('../models/users');
const Products = require('../models/produtcs'); //here we want to use it for check if this product are found in our stock
const Cart = require('../models/cart');


const router = express.Router({ mergeParams: true });


 //Get All Data Of Carts                 //Worked ^_^
  //=========================
  router.get('/',async(req,res)=>{
    try {
        const result = await Cart.find().populate('products.productId')
        .populate('user');
        res.status(201).json({
            success: true,
            data: result,
            count :result.length
        });
      } catch (error) {
        console.log(error);
      }
});


 //Creat Single Cart                      //Worked ^_^
  //=========================
  router.post('/:Uid' ,async(req,res)=>{
    try {
        // console.log(req.body);
        const user = await Users.findById(req.params.Uid);
        // console.log(vendor);
        if (!user) {
            console.log('Error in ID');
        }
        req.body.user = req.params.Uid  ;
        const result = await Cart.create(req.body);
        console.log('Cart Created');
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
});


  //Get Single Cart                     //Worked ^_^
  //=========================
  router.get('/:id',async(req,res)=>{
    try {
        const result = await Cart.findById(req.params.id).populate('user');;
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );


  //Update Single Cart                    //Worked ^_^
  //=========================
  router.put('/:id' , async(req,res)=>{
    try {
        const result = await Cart.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log('Cart Updated');
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );


  //Delete Single Cart                     //Worked ^_^
  //=========================
  router.delete('/:id' , async(req,res)=>{
    try {
        const result = await Cart.findByIdAndRemove(req.params.id);
        console.log('Cart Deleted');
        res.status(201).json({
            success: true,
            data:  ''
        });
      } catch (error) {
        console.log(error);
      }
} )







module.exports = router;