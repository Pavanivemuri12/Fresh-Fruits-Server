const mongoose = require('mongoose')

const ExoticFruitsSchema = new mongoose.Schema({
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

const ExoticFruits = mongoose.model("ExoticFruits", ExoticFruitsSchema)

module.exports = ExoticFruits



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 