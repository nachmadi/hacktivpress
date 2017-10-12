var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

var routerUser = require('./routers/user');
var routerArticle = require('./routers/article');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(cors());
app.use('/users', routerUser);
app.use('/articles', routerArticle);

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
