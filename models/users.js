const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');

  const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
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
    role: {
        type: String ,
        enum : ['admin' , 'manger' , 'clint'] ,
        default : "clint"
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false // this prevent this field to be send by request of API to Front End
    }
});

// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) { // this for check I update the password this method want to be not runing
        next();
    }

    const salt = await bcrypt.genSalt(10); //كل ما رقم الراوند علي كل ما قوة الباسوورد زادت  أمان الباسوورد ولاكن يزداد  ثقل السيستيم
    this.password = await bcrypt.hash(this.password, salt);
});


// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};



    // const validateschema = {
    //     name: Joi.string().min(5).max(50).required(),
    //     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    //     password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6).max(10).required(),
    //     role : Joi.string().required().valid('admin' , 'manger' , 'clint')
    // };

module.exports = mongoose.model('Users', UserSchema);

// exports.validateschema = validateschema;
