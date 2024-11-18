const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://yaminigummadi8:lbSUJl29cOo9nRQt@in-aws.l43se.mongodb.net/Fruit-Store?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')