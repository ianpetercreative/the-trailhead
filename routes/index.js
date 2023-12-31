var express = require('express');
var router = express.Router();
const passport = require('passport'); 
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Trailhead' });
});

module.exports = router;

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});