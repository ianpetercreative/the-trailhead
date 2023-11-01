var express = require('express');
var router = express.Router();

const hikesCtrl = require('../controllers/hikes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes prepended with /hikes 
router.get('/', hikesCtrl.index);

router.get('/new', ensureLoggedIn, hikesCtrl.new);

router.get('/:id', hikesCtrl.show)

router.post('/', ensureLoggedIn, hikesCtrl.create)

module.exports = router;
