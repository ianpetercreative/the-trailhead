var express = require('express');
var router = express.Router();

const hikesCtrl = require('../controllers/hikes')

// All routes prepended with /hikes 
router.get('/', hikesCtrl.index);

router.get('/new', hikesCtrl.new);

router.post('/', hikesCtrl.create)

module.exports = router;
