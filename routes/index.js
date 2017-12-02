var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register_study.css', function (req,res,next) {
    res.sendfile('./public/stylesheets/register_study.css');
});

router.get('/register_study', function(req,res,next){
  res.sendfile('./views/register_study.html');
});

module.exports = router;
