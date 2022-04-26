const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    teaBase: {
        type: String,
        required: true
    },
    toppings: {
        type: String,
        required: false
    },
    dairyOption: {
        type: String,
        required: true
    },
    customAddons: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Drink', drinkSchema);