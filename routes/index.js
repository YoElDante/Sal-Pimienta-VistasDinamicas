var express = require('express');
const menues = require('../database/menues');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/index', { menues });
});

module.exports = router;
