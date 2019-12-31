require('dotenv').config();

const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');


module.exports = function(passport){

    passport.serializeUser(function(user,done){
        console.log('serializeUser');
        done(null,user._id);
    });

    passport.deserializeUser(function (id,done){
        console.log('deserializeuser');
        User.findById(id, function(err,user){
            done(err,user);
        })
    });

    passport.use(new localStrategy({ usernameField : 'email'}, function(email, password, done){
        User.findOne({ email : email }, function(err,user){
            user.comparePassword(password,(err, isMatch) => {
                if(err){
                    return done(err);  
                };
                if(!isMatch){
                    return done(null,false);
                }
                return done(null,user);
            })
        })
    }))
}