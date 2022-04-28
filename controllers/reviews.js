const Drink = require('../models/drink');

module.exports = {
    create,
    delete: deleteReview,
    update
};

function update(req, res) {
    console.log(req.params.id);
    Drink.findOne({'reviews._id': req.params.id}, function(err, drink) {
        console.log(err);
        
        const review = drink.reviews.id(req.params.id);
        console.log(review);
        if (!review.user.equals(req.user._id)) return res.redirect(`/drinks/${drink._id}`);
        review.content = req.body.content;
        drink.save(function(err) {
            res.redirect(`/drinks/${drink._id}`);
        });
    });
  }
  
function deleteReview(req, res, next) {
    Drink.findOne({'reviews._id': req.params.id}).then(function(drink){
        if (!drink) return res.redirect('/drinks');
        drink.reviews.remove(req.params.id);
        drink.save().then(function(){
            res.redirect(`/drinks/${drink._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function create(req, res) {
    console.log('Im working');
    Drink.findById(req.params.id, function(err, drink){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        drink.reviews.push(req.body);
        drink.save(function(err) {
            res.redirect(`/drinks/${req.params.id}`);
        });
    });
}