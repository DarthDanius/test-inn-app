var express = require('express');
var router = express.Router();

/* GET home page. */
const handler = function(req, res, next) {
  res.render('index', { title: 'Express' });
}
router.get('/', handler);

module.exports = router;
