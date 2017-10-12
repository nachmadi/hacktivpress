const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    author: { type: Schema.Types.ObjectId, ref: 'Customer' }
  }
)

Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
