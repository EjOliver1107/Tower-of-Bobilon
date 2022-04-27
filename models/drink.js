const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
})

module.exports = mongoose.model('Drink', drinkSchema);