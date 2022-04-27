const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        match: /.{5,}/
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  
})

const drinkSchema = new Schema({
    teaBase: {
        type: String,
        enum: ['Black Tea', 'Green Tea', 'Oolong Tea', 'Water Base'],
        required: true
    },
    toppings: {
        type: [String],
        enum: ['boba', 'mini boba','aiyu jelly','herb jelly', 'lychee jelly', 'aloe vera', 'pudding', 'creama'],
        required: false
    },
    dairyOption: {
        type: String,
        enum: ['milk', 'non-dairy','no-milk'],
        required: true
    },
    customAddons: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        enum:['opt1', 'opt2', 'opt3', 'opt4', 'opt5', 'opt6', 'opt7', 'opt8'],
        required: true
    },
    reviews: [reviewSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Drink', drinkSchema);