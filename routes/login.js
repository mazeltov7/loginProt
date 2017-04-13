const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.render('login');
});

router.post('/', function(req, res, next) {
	if (req.body.userName) {
		req.session.user = { name: req.body.userName };
		res.redirect('../');
	} else {
		const err = 'data is wrong';
		res.render('login', { error: err });
	}
});

module.exports = router;