
const mongoose = require('mongoose')

const cabSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    seats: Number,
    pricePerDay: Number,
    image: String,
    available: Boolean,
    description: String
});

module.exports = mongoose.model('Cab', cabSchema);