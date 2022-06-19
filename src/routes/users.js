var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/*user profile*/
router.get('/profile', userController.profile);

/*login*/
router.get('/login', userController.login);

/*loginUp */
router.get('/loginUp', userController.loginUp);

module.exports = router;
