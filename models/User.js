const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    trim: true,
    minlength: 4,
  },
  lastname:{
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number,
  }
})

userSchema.pre('save', function(next){
  var user = this;
  //비밀번호를 암호화 시킨다.
  if(user.isModified('password')){
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if(err) return next(err);
  
  
      bcrypt.hash(user.password , salt, function(err, hash) {
          if(err) return next(err)
          user.password = hash
          next();
      });
    });
  }else{
    next();
  }

  
})

userSchema.methods.comparePassword = function(plainPassword, callback){
  bcrypt.compare(plainPassword, this.password, function(err,isMatch){
    if(err) return callback(err)
    callback(null, isMatch)
  })
}

userSchema.methods.generateToken = function(callback){
  var user = this;
  // jsonwebtoken을 이용해서 token 생성하기
  var token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token

  user.save(function(err,user){
    if(err) return callback(err)
    callback(null, user)
  })
}

const User = mongoose.model('User', userSchema);

module.exports = { User };