const mongoose = require('mongoose')

const BasicFruitsSchema = new mongoose.Schema({
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

const BasicFruits = mongoose.model("BasicFruits", BasicFruitsSchema)

module.exports = BasicFruits



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 