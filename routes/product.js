const express = require("express");
const Products = require('../models/produtcs');

const router = express.Router({ mergeParams: true });

 //Get All Data Of Products                    //Worked ^_^
  //=========================
router.get('/',async(req,res)=>{
    try {
        const result = await Products.find();
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
});

 //Creat Single Product                      //Worked ^_^
  //=========================
router.post('/' ,async(req,res)=>{
    try {
        // console.log(req.body);
        const result = await Products.create(req.body);
        console.log('Product Created');
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
});

  //Get Single Product Of Products               //Worked ^_^
  //=========================
router.get('/:id',async(req,res)=>{
    try {
        const result = await Products.findById(req.params.id);
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );

  //Update Single Product                    //Worked ^_^
  //=========================
router.put('/:id' , async(req,res)=>{
    try {
        const result = await Products.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log('User Updated');
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );

  //Delete Single Product                      //Worked ^_^
  //=========================
router.delete('/:id' , async(req,res)=>{
    try {
        const result = await Products.findByIdAndRemove(req.params.id);
        console.log('User Deleted');
        res.status(201).json({
            success: true,
            data:  ''
        });
      } catch (error) {
        console.log(error);
      }
} )



module.exports = router;