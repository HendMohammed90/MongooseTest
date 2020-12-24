const express = require("express");
const Vendors = require('../models/vendor');
const Products = require('../models/produtcs'); //here we want to use it for check if this product are found in our stock
const vProducts = require('../models/vProduct');


const router = express.Router({ mergeParams: true });


 //Get All Data Of VProducts                 //Worked ^_^
  //=========================
  router.get('/',async(req,res)=>{
    try {
        const result = await vProducts.find().populate('products.productId')
        // .populate({                 //Didn't Work -_-
        //     path : 'vendor' ,
        //     model :'vendor'
        // });
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
});


 //Creat Single VProduct                      //Worked ^_^
  //=========================
  router.post('/:Vid' ,async(req,res)=>{
    try {
        console.log(req.body);
        const vendor = await Vendors.findById(req.params.Vid);
        // console.log(vendor);
        if (!vendor) {
            console.log('Error in ID');
        }
        req.body.vendor = req.params.Vid  ;
        const VProduct = await vProducts.create(req.body);
        console.log('VProduct Created');
        res.status(201).json({
            success: true,
            data: VProduct
        });
      } catch (error) {
        console.log(error);
      }
});


  //Get Single VProduct                     //Worked ^_^
  //=========================
  router.get('/:id',async(req,res)=>{
    try {
        const result = await vProducts.findById(req.params.id);
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );


  //Update Single VProduct                    //Worked ^_^
  //=========================
  router.put('/:id' , async(req,res)=>{
    try {
        const result = await vProducts.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log('vProduct Updated');
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );


  //Delete Single VProduct                     //Worked ^_^
  //=========================
  router.delete('/:id' , async(req,res)=>{
    try {
        const result = await vProducts.findByIdAndRemove(req.params.id);
        console.log('vProducts Deleted');
        res.status(201).json({
            success: true,
            data:  ''
        });
      } catch (error) {
        console.log(error);
      }
} )







module.exports = router;