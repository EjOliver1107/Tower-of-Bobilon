const Drink = require('../models/drink');


module.exports = {
  index,
  new: newDrink,
  show

}

function index(req, res) {
  Drink.find({}, function(err, drinks){
    res.render('drinks/index', { drinks });
  })
}
function newDrink(req, res) {
  res.render('drinks/new');
}
function show(req, res) {
  Drink.findById(req.params.id)
  res.render('drinks/show',{ drinks }) 
}