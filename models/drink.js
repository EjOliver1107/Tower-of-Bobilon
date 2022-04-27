const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    teaBase: {
        type: String,
        required: true
    },
    toppings: {
        type: [String],
        enum: ['boba', 'mini boba'],
        required: false
    },
    dairyOption: {
        type: String,
        required: true
    },
    customAddons: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Drink', drinkSchema);