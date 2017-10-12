var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

app.use(cors()); // cors harus diatas map

mongoose.connect('mongodb://localhost:27017/final_two', (err)=> {
  if (err) {
    console.log(err);
  } else {
    console.log('connect Mongoose.')
  }
})

app.listen(process.env.PORT||3000,()=>{
  console.log('Listening Port 3000')
});
