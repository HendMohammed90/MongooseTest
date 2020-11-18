const Users = require('./models/users');
const Products = require('./models/produtcs');
const colors = require("colors");

//Connect to Our DB
const connectDB = require('./config/dp');
// connectDB();


// Users.create({name : "Hend Mohammed" , email : "Hend.odesk.tasks@gmail.com" , role : "Admin" , password : "123456"});
// Users.create({name : "Heba Mohammed" , email : "Heba.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
// Users.create({name : "Haythem Mohammed" , email : "Haythem.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
// Users.create({name : "Alaa Mohammed" , email : "alaa.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});

Products.create({name : "Product1" , description :"This description for first Product" , price : 100 ,category : "category 1" }) ;