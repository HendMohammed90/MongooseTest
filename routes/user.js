const express = require("express");
const Users = require('../models/users');

const router = express.Router({ mergeParams: true });

 //Get All Data Of Users                    //Worked ^_^
  //=========================
router.get('/',async(req,res)=>{
    try {
        const result = await Users.find();
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
});

 //Creat Single User                      //Worked ^_^
  //=========================
router.post('/' ,async(req,res)=>{
    try {
        // console.log(req.body);
        const user = await Users.create(req.body);
        console.log('User Created');
        res.status(201).json({
            success: true,
            data: user
        });
      } catch (error) {
        console.log(error);
      }
});

  //Get Single User Of Users               //Worked ^_^
  //=========================
router.get('/:id',async(req,res)=>{
    try {
        const result = await Users.findById(req.params.id);
        res.status(201).json({
            success: true,
            data: result
        });
      } catch (error) {
        console.log(error);
      }
} );

  //Update Single User                    //Worked ^_^
  //=========================
router.put('/:id' , async(req,res)=>{
    try {
        // const result = await Users.findByIdAndUpdate(req.params.id, {
        //   name: "Test22 Updated From Server ",
        // });
        const result = await Users.findByIdAndUpdate(req.params.id, req.body, {
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

  //Delete Single User                     //Worked ^_^
  //=========================
router.delete('/:id' , async(req,res)=>{
    try {
        const result = await Users.findByIdAndRemove(req.params.id);
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