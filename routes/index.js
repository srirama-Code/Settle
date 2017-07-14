var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('Index.html');
});

router.get('/ss', function(req, res, next){
    res.render('sriram.html');
});

module.exports = router;