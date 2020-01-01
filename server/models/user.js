const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new schema({
    name: {
        type: String,
        required: [true, 'cannot be blank'],
        minlength: 4,
        maxlength: 28
    },
    email: {
        type: String,
        required: [true, 'cannot be blank'],
        unique: true
    },
    password: {
        type: String,
        minLength: 6
    }
});

userSchema.pre('save', function(next){
    var password = this.password;
    var self = this;
    console.log(this, this.password, this.isModified(this.password, 'password'));

    if(this.isModified(this.password)) return next();

    bcrypt.genSalt(saltRounds, function(err, salt){
        bcrypt.hash(password, salt, function(err, hash){
            self.password = hash;
            next();
        })
    })
});

userSchema.methods.comparePassword = function(userPassword, cb){
    bcrypt.compare(userPassword, this.password, function(err, isMatch){
        console.log(isMatch,'isMatch');
        if(err){
            return cb(err, false);
        }
        return cb(null, isMatch);
    })
}


const user = mongoose.model('User', userSchema);

module.exports = user;