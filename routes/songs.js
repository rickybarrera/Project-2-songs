var express = require('express');
var router = express.Router();
const songsCtrl = require('../controllers/songs');

router.get('/', songsCtrl.index);

router.get('/new', songsCtrl.new);

router.post('/', songsCtrl.create);

module.exports = router;
