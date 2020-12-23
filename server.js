const http = require("http");
const Users = require("./models/users");
const url = require("url");
const colors = require('colors');

const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);
  //Get All Data Of Users                    //Worked ^_^
  //=========================

  if (req.url === "/") {
    try {
      const result = await Users.find();
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.log(error);
    }
  }

  //Get Single User Of Users               //Didn't Work  -_-
  //=========================
  else if (req.url === "/:id") {
    try {
      const result = await Users.findById(req.params.id);
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.log(error);
    }
  }

  //Creat Single User                      //Worked ^_^
  //=========================
  // Users.create({name : "Hend Mohammed" , email : "Hend.odesk.tasks@gmail.com" , role : "Admin" , password : "123456"});
  // Users.create({name : "Heba Mohammed" , email : "Heba.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
  // Users.create({name : "Haythem Mohammed" , email : "Haythem.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
  // Users.create({name : "Alaa Mohammed" , email : "alaa.odesk.tasks@gmail.com" , role : "clint" , password : "123456"});
  else if (req.url === "/creat" && req.method === "POST") {
    try {
      const result = await Users.create({
        name: "Test22 From Server ",
        email: "Test22.Test@gmail.com",
        // role: "Admin",
        password: "123456",
      });
      console.log('User Created');
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.log(error);
    }
  }

  //Update Single User                     //Didn't Work  -_-
  //=========================
  else if (req.url === "update/:id" && req.method === "PUT") {
    try {
      const result = await Users.findByIdAndUpdate(req.params.id, {
        name: "Test22 Updated From Server ",
      });
      console.log('User Updated');
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.log(error);
    }
  }

  //Delete Single User                     //Didn't Work  -_-
  //=========================
  else if (req.url === "delete/:id" && req.method === "DELETE") {
    try {
      const result = await Users.findByIdAndRemove(req.params.id);
      console.log('User Deleted');
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.log(error);
    }
  }
});

server.listen(3000, () => {
  console.log('Server running at port'.bgWhite.red.bold + '3000'.bgWhite.green);
});
