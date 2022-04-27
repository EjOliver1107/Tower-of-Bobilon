const Drink = require('../models/drink');


module.exports = {
  index,
  new: newDrink,
  create,
  show

}

function show(req, res) {
  console.log(req.params.id);
  Drink.findById(req.params.id, function(err, drink){

    console.log(drink);
    res.render('drinks/show', { drink }) 
  })
}

function newDrink(req, res) {
  res.render('drinks/new');
  
}
function create (req, res) {
  var drink = new Drink(req.body);
  drink.save(function(err){
    console.log(drink);
  
    if (err) return res.redirect('/drinks/new');
    console.log(err);
    res.redirect(`/drinks/${drink.id}`);
  })
}
function index(req, res) {
  Drink.find({}, function(err, drinks){
    res.render('drinks/index', { drinks });
  })
}