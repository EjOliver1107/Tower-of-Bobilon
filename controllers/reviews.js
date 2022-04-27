const Drink = require('../models/drink');

module.exports = {
    create,
    delete: deleteReview
};

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