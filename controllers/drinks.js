const Drink = require('../models/drink');


module.exports = {
index

};

function index(req, res) {
    Drink.find({}, function(err, movies) {
      res.render('movies/index', { title: 'All Movies', movies });
    });
  }
  