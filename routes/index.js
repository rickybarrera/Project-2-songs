var express = require('express');
var router = express.Router();
const passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    successRedirect : '/songs',
    failureRedirect : '/songs',
    scope: ['profile', 'email'],
  }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/songs',
    failureRedirect : '/songs'
  }
));
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/songs');
});
module.exports = router;
