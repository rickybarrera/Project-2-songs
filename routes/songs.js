var express = require('express');
var router = express.Router();
const songsCtrl = require('../controllers/songs');
const isLoggedIn = require('../config/auth');

router.get('/', songsCtrl.index);
router.get('/new', isLoggedIn, songsCtrl.new);
router.post('/', songsCtrl.create);
router.get('/:id', songsCtrl.show);
router.get('/:id/edit', isLoggedIn, songsCtrl.edit);
router.put('/:id', songsCtrl.update);
router.delete('/:id', isLoggedIn, songsCtrl.delete);
// set up route for show page then delete
module.exports = router;
