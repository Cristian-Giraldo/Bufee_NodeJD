var express = require('express');
var router = express.Router();

var businessController = require('../controllers/businessController');

/*business profile*/
router.get('/business', businessController.getBusiness)   


module.exports = router;
