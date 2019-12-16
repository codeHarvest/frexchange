require('dotenv').config();


const User = require('../models/user');
const passport = require('passport');
// const jwt = require('jsonwebtoken');


exports.registerUser = (req,res) => {
    console.log(req.user);

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    if(!req.body.name || !req.body.email){
        return res.status(400).json({
            message : "fill the required details to register"
        })
    }
    if(req.body.password.length < 6){
        return res.status(411).json({
            message: "password should be atleast 6 characters"
        })
    }
    User.create(user, (err,user) => {
        if(err) throw err;
        res.json(user);
    })
}