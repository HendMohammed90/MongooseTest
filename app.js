const Users = require("./models/users");
const Products = require("./models/produtcs");
// const Vendors = require("./models/vendor");
// const Cart = require("./models/cart");
const vProducts = require("./models/vProduct");
const colors = require("colors");
const express = require("express");
const app = express();

app.use(express.json());

//Connect to Our DB
const connectDB = require("./config/dp");
// connectDB();


//Rout Files 
const users = require('./routes/user');
const products = require('./routes/product')
const vendors = require('./routes/vendor')
const VProducts = require('./routes/vProducts')
const cart = require('./routes/cart');
const auth = require('./routes/auth');



//Mount Our Routes
app.use('/api/v1/users', users);
app.use('/api/v1/products', products);
app.use('/api/v1/vendors', vendors);
app.use('/api/v1/vproducts', VProducts);
app.use('/api/v1/cart', cart);
app.use('/api/v1/auth', auth);



//Calling Our Server
// require('./server');

// Products.create({name : "Product4" , description :"This description for forth Product" , price : 400 ,category : "category 4" }) ;

// Vendors.create({name:"vendor4" , address : "123 st El-Hora -giza" ,phone :1234567 , email : "jjkih333@gmail.com" , company : "company 4"});
// Vendors.create({name:"vendor2" , address : "123 st El-Hora -aswan" ,phone :1234567 , email : "fgh123@gmail.com" , company : "company 1"});
// Vendors.create({name:"vendor3" , address : "123 st El-Hora -Qina" ,phone :1234567 , email : "jjj123@gmail.com" , company : "company 2"});
// Vendors.create({name:"vendor4" , address : "123 st El-Hora -aswan123" ,phone :1234567 , email : "qwe123@gmail.com" , company : "company 3"});

// Cart.create({user : "5fb513827d5bab0442e1b68d" ,products : [{ productId : "5fb5492d2f47f510aa939290" ,amount : 20 }, {productId : "5fc17cb05dd33bd57561670a" ,amount :30 } ]});

// Cart.create({user : "5fb513827d5bab0442e1b68e" ,products : [{ productId : "5fb5492d2f47f510aa939290" ,amount : 50 }, {productId : "5fc17cb05dd33bd57561670a" ,amount :40 } ]});

// Cart.create({user : "5fb513827d5bab0442e1b68d" ,products : [{ productId : "5fc17cfa450f2ed5b2f46650" ,amount : 20 }, {productId : "5fc17d2086ea38d5e7f71c35" ,amount :10 } ]});

// Cart.create({user : "5fb513827d5bab0442e1b68f" ,products : [{ productId : "5fc17d2086ea38d5e7f71c35" ,amount : 60 }, {productId : "5fc17cfa450f2ed5b2f46650" ,amount :1000 } ]});

// vProducts.create({vendor : "5fe0ce92fc8b612dbe90da90" ,products :[{ productId : "5fb5492d2f47f510aa939290" ,amount : 20 }, {productId : "5fc17cb05dd33bd57561670a" ,amount :30 } ] , totalPrice : 1000})

//My Try:-
//========================

// Cart.find()
// .populate({
//     path :'products.productId' ,
// populate :{
//     path :'productId'
// }
// select :'name:' ,
// select : 'products.amount' ,
// select : {'productId.name': 1} ,
// modal :'Products'
// })
// .populate('user')
// .populate('products.productId')
// .exec((err,data)=>{
//     if(err)  console.log(err);
//     else  console.log(data[1].products);
// })

//by using exec():-
//==========================

// Cart.find()
// .populate('user')
// // .populate('products.productId')
// .populate({
//     path :'products.productId' ,
//     // select : 'name' ,
//     select : {'name' : 1 , 'description' : 1}
// })
// .exec((err, res)=>{
//     if(err) console.log(err);
//     else console.log(res[1].products); //here to get the products
// })

// app.listen(3000 , () => {
//     console.log('Server running at port'.bgWhite.red.bold + '3000'.bgWhite.green);
//   })

const PORT = 3000;
//set The listening
const server = app.listen(3000, () => {
  console.log(`App Running on Port ${PORT}`.rainbow.bold);
});

//Handle Unhandled Promise Rejections
process.on("unhandledRejection", (error, promise) => {
  //log some exception
  console.log(`Error: ${error.message}`.bgYellow.red.bold);
  //Close Server & Exit Process
  server.close(() => process.exit(1));
});
