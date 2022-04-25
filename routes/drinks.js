const express = require('express');
const router = express.Router()
const drinksCtrl = require('../controllers/drinks');
const isLoggedIn = require('../config/auth');

// GET /drinks
router.get('/', drinksCtrl.index);



module.exports = router;
