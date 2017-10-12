var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/', articleController.createArticle)
router.get('/', articleController.getAllArticle)
router.put('/:id', articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)

module.exports = router;
