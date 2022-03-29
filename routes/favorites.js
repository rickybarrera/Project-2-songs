const express = require('express')
const router = express.Router()
const favoritesCtrl = require('../controllers/favorites')
const isLoggedIn = require('../config/auth');
router.post('/songs/:id/favorites', isLoggedIn, favoritesCtrl.create)
router.delete('/favorites/:id', isLoggedIn, favoritesCtrl.delete)

module.exports = router;