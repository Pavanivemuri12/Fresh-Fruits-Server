const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    uid: {
        type: Number,
        required: true
    },
    pid: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    orderedAt: {
        type: String,
        required:true,
    }
})

const Orders = mongoose.model("Orders", OrdersSchema)

module.exports = Orders


