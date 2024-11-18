const express = require('express')
const router = express.Router();
const FruitBaskets= require('../models/FruitBaskets')
//const validate = require('../config/auth')
const { validateTokenAdmin } = require('../config/auth')

router.get('/count',validateTokenAdmin, async (req, res) => {
    try {
        const count = await FruitBaskets.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
// Method : GET  || API : localhost:3000/products/all
router.get('/all', async (req, res) => {
    try {
        const fruitbaskets = await FruitBaskets.find()
        return res.status(200).json(fruitbaskets)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : POST  || API : localhost:3000/products/add
router.post('/add',validateTokenAdmin, async (req, res) => {
    try {
        const newbasket = new FruitBaskets(req.body)
        const { title, img, price } = newbasket
        if (!title || !img || !price) {
            return res.status(400).json({ message: "All fields required" })
        }
        await newbasket.save()
        return res.status(200).json(newbasket)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : PUT  || API : localhost:3000/products/edit/_id
router.put('/edit/:id',validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingbasket = await FruitBaskets.findOne({ _id: id })
        if (!existingbasket) {
            return res.status(404).json({ message: "Fruit Basket not found" })
        }
        const updatedbasket = await FruitBaskets.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedbasket)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : DELETE  || API : localhost:3000/products/delete/_id
router.delete('/delete/:id',validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingbasket = await FruitBaskets.findOne({ _id: id })
        if (!existingbasket) {
            res.status(404).json({ message: "Fruit Basket not found" })
        }
        await FruitBaskets.findByIdAndDelete(id)
        return res.status(200).json({ message: "Fruit Basket Deleted" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})


module.exports = router

// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE

// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE


// 200 -> OK
// 404 -> NOT FOUND
// 500 -> INTERNAL SERVER ERROR
// 201 -> CREATED
// 400 -> BAD Request
// 401 -> UnAuthorized
// 409 -> Conflict