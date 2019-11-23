var express = require('express');

var imageController = require('./imageController');
var upload = require('./multerConfig');
var router = express.Router();

router.post('/addImage', upload.any(), imageController.createApp);
module.exports = router