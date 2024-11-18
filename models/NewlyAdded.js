const mongoose = require('mongoose')

const NewlyAddedSchema = new mongoose.Schema({
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
        required: true
        // unique:true
    },
})

const NewlyAdded = mongoose.model("NewlyAdded", NewlyAddedSchema)

module.exports = NewlyAdded



// name: string :required
// email: string: required : unique
// phone: number: required : unique
// address: string 