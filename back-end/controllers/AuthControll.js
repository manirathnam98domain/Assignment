const  User    = require('../models/Authmodel');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');


    const register = (req, res) => {
      bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
          res.json({
            error:err
          })

        }
        let user = new User({
          email: req.body.email,
          fisrtname: req.body.fisrtname,
          lastname: req.body.lastname,
          address: req.body.address,
          birthdate: req.body.birthdate,
          password: hashedPass

        })
          user.save()
          .then(user =>{
            res.json({
              message: 'User Added Successfully'
              })
          })
        .catch(error =>{
          res.json({
            message: 'An Error Occured!'
              })
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false, msg: "No user registred" });
          })
      })
  }



 const login = (req, res)=>{
  var username = req.body.email
  var password  = req.body.password

  User.findOne({$or: [{email:username},{fisrtname:username}]})
  .then(user => {
    if(user){
      bcrypt.compare(password, user.password, function(err,result){
        if(err){
          res.json({
            error:err
          }) 
        }
        if(result){
          let token = jwt.sign({fisrtname: user.fisrtname}, 'verySecretValue', {expiresIn: '24h'})
          res.json({
            message: 'Login Successflluy! ',
            token
          })
        }else {
          res.json({
            message:'Password not macth!'
          })
        }
      })
    }else{
      res.json({
        message:'No user found'
      })
    }
  })
 }






    module.exports = {
      register, login
    }






