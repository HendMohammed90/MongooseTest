const express = require("express");
const Vendors = require('../models/vendor');

const router = express.Router({ mergeParams: true });

 //Get All Data Of Vendors                    //Worked ^_^
  //=========================
router.get('/',async(req,res)=>{
    try {
        const result = await Vendors.find();
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
});

 //Creat Single Vendor                      //Worked ^_^
  //=========================
router.post('/' ,async(req,res)=>{
    try {
        // console.log(req.body);
        const user = await Vendors.create(req.body);
        console.log('Vendor Created');
        res.status(201).json({
            success: true,
            data: user
        });
      } catch (error) {
        console.log(error);
      }
});

  //Get Single Vendor                     //Worked ^_^
  //=========================
router.get('/:id',async(req,res)=>{
    try {
        const result = await Vendors.findById(req.params.id);
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );

  //Update Single Vendor                    //Worked ^_^
  //=========================
router.put('/:id' , async(req,res)=>{
    try {
        // const result = await Vendors.findByIdAndUpdate(req.params.id, {
        //   name: "Test22 Updated From Server ",
        // });
        const result = await Vendors.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log('Vendor Updated');
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );

  //Delete Single Vendor                     //Worked ^_^
  //=========================
router.delete('/:id' , async(req,res)=>{
    try {
        const result = await Vendors.findByIdAndRemove(req.params.id);
        console.log('Vendor Deleted');
        res.status(201).json({
            success: true,
            data:  ''
        });
      } catch (error) {
        console.log(error);
      }
} )



module.exports = router;