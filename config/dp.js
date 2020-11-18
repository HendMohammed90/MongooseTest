const mongoose = require('mongoose');

 const connectDB = mongoose.connect('mongodb://localhost/stockDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log(
        // `MongoDB Connected : ${connectDB.connection.cyan}`.blue.underline.bold
        "MongoDB Connected : "
      );
      


module.exports = connectDB;
