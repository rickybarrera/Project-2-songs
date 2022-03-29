var express = require('express');
var router = express.Router();
const songsCtrl = require('../controllers/songs');

router.get('/', songsCtrl.index);

router.get('/new', songsCtrl.new);

router.post('/', songsCtrl.create);
router.get('/:id', songsCtrl.show);
router.delete('/:id', songsCtrl.delete);
// set up route for show page then delete
module.exports = router;
