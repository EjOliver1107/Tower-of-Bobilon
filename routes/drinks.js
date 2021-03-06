const express = require('express');
const router = express.Router();
const drinksCtrl = require('../controllers/drinks');
const isLoggedIn = require('../config/auth');

// GET /drinks
router.get('/', drinksCtrl.index);
// GET /drinks/new 
router.get('/new', drinksCtrl.new);
// POST /drinks
router.post('/', isLoggedIn, drinksCtrl.create);
// GET /drinks/:id 
router.get('/:id', drinksCtrl.show);

module.exports = router;
