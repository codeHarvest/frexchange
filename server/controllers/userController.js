require('dotenv').config()  


const User = require('../models/user');

exports.registerUser = (req,res) => { 
  console.log(req.body, "line no 9 registeruser");
  console.log(req.user);
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
}
  if(!req.body.name || !req.body.email){
    return res.status(400).json({ 
      message: "fill required details to register" 
    })
  }
  if( req.body.password.length < 6){
    return res.status(411).json({
      message: "password should be atleast 6 charactars"
    })
  }
    User.create(user, (err,user) => {
      if(err) throw err;
      // console.log(user,"user created");
      res.json(user);
    })
}


