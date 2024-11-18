const mongoose = require('mongoose')

const OrganicFruitsSchema = new mongoose.Schema({
    title: { // Property/Filed title
        type: String, // Data type of the Property
        required: true // Nullable(false) or NotNullable(true) 
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // unique:true
    },
})

const OrganicFruits = mongoose.model("OrganicFruits", OrganicFruitsSchema)

module.exports = OrganicFruits
