const Users = require('./models/users');
const Products = require('./models/produtcs');
const Vendors = require('./models/vendor')
const Cart = require('./models/cart');
const vProducts = require('./models/vProduct');
const colors = require("colors");

//Connect to Our DB
const connectDB = require('./config/dp');
// connectDB();


// Users.create({name : "Hend Mohammed" , email : "Hend.odesk.tasks@gmail.com" , role : "Admin" , password : "123456"});
// Users.create({name : "Heba Mohammed" , email : "Heba.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
// Users.create({name : "Haythem Mohammed" , email : "Haythem.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
// Users.create({name : "Alaa Mohammed" , email : "alaa.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});

// Products.create({name : "Product4" , description :"This description for forth Product" , price : 400 ,category : "category 4" }) ;


// Vendors.create({name:"vendor2" , address : "123 st El-Hora -aswan" ,phone :1234567 , email : "fgh123@gmail.com"});
// Vendors.create({name:"vendor3" , address : "123 st El-Hora -Qina" ,phone :1234567 , email : "jjj123@gmail.com"});
// Vendors.create({name:"vendor4" , address : "123 st El-Hora -aswan123" ,phone :1234567 , email : "qwe123@gmail.com"});



// Cart.create({user : "5fb513827d5bab0442e1b68d" ,products : [{ productId : "5fb5492d2f47f510aa939290" ,amount : 20 }, {productId : "5fc17cb05dd33bd57561670a" ,amount :30 } ]});

// Cart.create({user : "5fb513827d5bab0442e1b68e" ,products : [{ productId : "5fb5492d2f47f510aa939290" ,amount : 50 }, {productId : "5fc17cb05dd33bd57561670a" ,amount :40 } ]});

// Cart.create({user : "5fb513827d5bab0442e1b68d" ,products : [{ productId : "5fc17cfa450f2ed5b2f46650" ,amount : 20 }, {productId : "5fc17d2086ea38d5e7f71c35" ,amount :10 } ]});

// Cart.create({user : "5fb513827d5bab0442e1b68f" ,products : [{ productId : "5fc17d2086ea38d5e7f71c35" ,amount : 60 }, {productId : "5fc17cfa450f2ed5b2f46650" ,amount :1000 } ]});

// vProducts.create({vendor : "5fc185f19aa0fcd7f046c71d" ,products :[{ productId : "5fb5492d2f47f510aa939290" ,amount : 20 }, {productId : "5fc17cb05dd33bd57561670a" ,amount :30 } ]})


Cart.find((err,data)=>{
    if(err)  console.log(err);
    else  console.log(data);
})
.populate('user')
// .populate('Products')
// .populate({
//     path: 'Products',
//     populate: { path: 'products', model: 'Products' }}) ;
.populate({
    path :'products' ,
    populate :{
        path :'productId'
    }
})
