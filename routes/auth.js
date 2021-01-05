const express = require("express");
const Users = require('../models/users');
const bcrypt = require('bcryptjs');



const router = express.Router({ mergeParams: true });


//Login User               //Worked ^_^
//=========================
router.post('/',async(req,res)=>{
    try {
        let { email, password } = req.body;
        // console.log(email , password)

        //Validate Email and password

        if (!email || !password)   throw new Error('Pleas Provide an email and password')

        //Check for user

        const user = await Users.findOne({ email }).select('+password');
        if (!user)  throw new Error('Error in password or email')

        //Check for the user password

        // const salt = await bcrypt.genSalt(10);
        // user.password = await bcrypt.hash(user.password, salt);

        const isValid = await bcrypt.compare(password, user.password );
        // console.log(isValid);
        if (!isValid)  throw new Error('Error in password or email')

        // res.status(201).json({
        //     success: true,
        //     data: user
        // });
    } catch (error) {
        console.log(error);
    }
} );



module.exports = router;