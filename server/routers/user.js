var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
//router.get('/', auth.islogin, userController.getallUser)
router.get('/', userController.getallUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;
