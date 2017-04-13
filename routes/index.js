var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.session);
  sessionCheck(req, res, next);
});

function sessionCheck(req, res, next) {
	console.log(req);
	if (req.session.user) {
		res.render('index', { title: 'yooooo'});
	} else {
		res.redirect('/users');
	}
};


module.exports = router;
