const user = require('../models/User');
const helper = require('../helpers/util');
var jwt = require('jsonwebtoken');

module.exports = {
  // login
  signin : (req,res) => {
    user.findOne({
      username: req.body.username
    })
    .then(datauser => {
      let saltFrmDb = datauser.salt;
      let passFromCli = helper.getPassWithSalt(req.body.password,saltFrmDb);
      if(datauser.username==passFromCli){
        jwt.sign({ username: datauser.username,
                   email: datauser.email,
                   _id: datauser._id
        }, "bismillah",// modul require('dotenv').config() letak file di root
        // }, process.env.SECRET_TOKEN,// modul require('dotenv').config() letak file di root
        { expiresIn: 60 * 60 },(err,token)=>{
             if(!err){
                res.send(token);
             }else{
                res.send(err);
             }
        });
      } else {
        res.send('password anda salah')
      }
    })
    .catch(err => {
      res.send(err)
    })
  },
  //daftar user baru
  signup : (req,res, next) => {
        user.findOne({
          username: req.body.username
        })
        .then(datauser=>{
          if(datauser == null){
            salt = helper.getRandom(5);
            md5_pass = helper.getPassWithSalt(req.body.password, salt);
            console.log(md5_pass);
            user.create({
              password: md5_pass,
              email: req.body.email,
              salt: salt
            })
            .then(data => {
              //next();
              res.send(data)
            })
          }else{
            res.send("Data sudah ada")
          }
        })
        .catch(err => {
          console.log(err);
          res.send(err)
        })
  },
  getallUser : (req,res) => {
        user.find()
        .then(datauser => {
          res.send(datauser)
        })
        .catch(err => {
          res.send(err)
        })
  },
  getByUser : (req,res) => {
        user.find({})
        .then(datauser => {
          res.send(datauser)
        })
        .catch(err => {
          res.send(err)
        })
  },
  deleteUser : (req,res) => {
        user.deleteOne({_id:req.params.id})
        .then(result => {
          res.send(result)
        })
        .catch(err =>{
           res.send(err)
        })
  },
  updateUser : (req,res) => {
      salt = helper.getRandom(5);
      md5_pass = halper.getPassWithSalt(req.body.password, salt);
      user.findOneAndUpdate({email:req.params.username},{
        user_pass: md5_pass,
        email: req.body.email,
        salt:salt
      })
      .then(result=>{
          res.send(result);
      })
      .catch(err=>{
          res.send(err);
      })
  }

}
