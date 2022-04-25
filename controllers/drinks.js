const Drink = require('../models/drink');


module.exports = {
  index,
  new: newDrink
}

function index(req, res) {
  Drink.find({}, function(err, movies){
    res.render('drinks/index', { drinks });
  })
}
function newDrink(req, res) {
  res.render('drinks/new', { title: 'Add Movie'});
}