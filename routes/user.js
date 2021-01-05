const express = require("express");
const Users = require('../models/users');
const Joi = require('joi');

const router = express.Router({ mergeParams: true });

const validateschema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).max(10).required(),
    role : Joi.string().required().valid('admin' , 'manger' , 'clint')
};



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

 //Creat Single User                      // Worked ^_^ & (JOI DIDN'T WORK -_-)
  //=========================
router.post('/' ,async(req,res)=>{
    try {
        // console.log(req.body);
        // const { error } = await validateschema.validateAsync(req.body);
        //
        // if (error) return res.status(400).send(error.details[0].message);
        //
        // let user = await Users.findOne({email : req.body.email});
        //
        // if(user) return res.status(400).send("Invalid Email It's alredy saved in database");

        // user = new User(req.body);
        //
        // await user.save();

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

//Add More than one User                     //Worked ^_^
//=========================
router.post('/addAllUsers' , async (req, res)=>{
    // console.log(req.body);
    try {
        let addUsers = [];
        let userArray = req.body;
        userArray.forEach(async(element)=>{
            try {
                const newUser = await Users.create(element);
                newUser.save();
                if(newUser) addUsers.push(newUser);
                else throw new Error();
            }catch (e){
                console.log(e);
            }
        })

        if(addUsers.length === userArray.length){
            res.status(201).json({
                success: true,
                data:  addUsers
            });
        }else {
            res.send(userArray);
        }
    }catch (error){
        console.log(error)
    }
})




module.exports = router;