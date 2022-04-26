const Drink = require('../models/drink');


module.exports = {
  index,
  new: newDrink,
  show,
  create

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
  Drink.findById(req.params.id, function(err, drink){
    res.render('drinks/show',{ drink }) 
  })
}
function create (req, res) {
  var drink = new Drink(req.body);
  drink.save(function(err){
    if (err) return res.redirect('/drinks/new');
    res.redirect(`/drinks/${drink._id}`);
  })
}