const mongoose = require('mongoose')

const FruitBasketsSchema = new mongoose.Schema({
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

const FruitBaskets = mongoose.model("FruitBaskets", FruitBasketsSchema)

module.exports =FruitBaskets



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 