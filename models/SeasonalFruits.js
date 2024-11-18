const mongoose = require('mongoose')

const SeasonalFruitsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})


const SeasonalFruits = mongoose.model("SeasonalFruits", SeasonalFruitsSchema)

module.exports = SeasonalFruits;
