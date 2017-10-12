const Article = require('../models/Article');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  createArticle: (req,res)=>{
               Article.create({
                   title: req.body.title,
                   content: req.body.content,
                   category: req.body.category,
                   author:  ""
                })
                .then(data=>{
                   res.send(data);
                })
                .catch(err=>{
                  res.send(err);
                })
  },
  getAllArticle:(req, res)=> {
               Article.find()
               .then(hasil => {
                  res.send(hasil);
               })
               .catch(err=>{
                 res.send(err);
               })
  },
  getFindArticle: (req, res)=>{
              Article.find({})
              .populate('author')
              .then(hasil => {
                  res.send(hasil);
              })
              .catch(err=>{
                res.send(err);
              })
  },
  deleteArticle : (req,res) => {
                var id = req.params._id;
                var o_id = new ObjectId(id);
                var query = {_id:o_id}
                Article.deleteOne(query)
                .then(result => {
                  res.send(result)
                })
                .catch(err => {
                  res.send(err)
                })
  },
  updateArticle: (req, res)=>{
              var id = req.params._id;
              var o_id = new ObjectId(id);
              var query = {_id:o_id}
              console.log(query);
              Todolist.findOneAndUpdate(query,{
                title: req.body.title,
                content: req.body.content,
                category: req.body.category,
                author: ""
              })
              .then(result=>{
                res.send(result);
              })
              .catch(err=>{
                  res.send(err);
              })
  }
}
