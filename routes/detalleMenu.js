var express = require('express');
const menues = require('../database/menues');
var router = express.Router();

router.get('/:id', function(req, res, next) {

  let {id} = req.params;

  res.render('../views/detalleMenu.ejs', { menues , id });
});

module.exports = router;