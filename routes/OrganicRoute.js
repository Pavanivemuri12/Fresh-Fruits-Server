const express = require('express')
const router = express.Router();
const OrganicFruits = require('../models/OrganicFruits')
// const validate = require('../config/auth')
const { validateTokenAdmin } = require('../config/auth')

router.get('/count',validateTokenAdmin, async (req, res) => {
    try {
        const count = await OrganicFruits.countDocuments()
        return res.status(200).json({ count: count })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})
// Method : GET  || API : localhost:3000/products/all
router.get('/all', async (req, res) => {
    try {
        const organicfruits = await OrganicFruits.find()
        return res.status(200).json(organicfruits)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : POST  || API : localhost:3000/products/add
router.post('/add',validateTokenAdmin, async (req, res) => {
    try {
        const neworganicfruit = new OrganicFruits(req.body)
        const { title, img, price } = neworganicfruit
        if (!title || !img || !price) {
            return res.status(400).json({ message: "All fields required" })
        }
        await neworganicfruit.save()
        return res.status(200).json(neworganicfruit)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : PUT  || API : localhost:3000/products/edit/_id
router.put('/edit/:id',validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const existingorganicfruit = await OrganicFruits.findOne({ _id: id })
        if (!existingorganicfruit) {
            return res.status(404).json({ message: "Product not found" })
        }
        const updatedorganicfruit = await OrganicFruits.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(updatedorganicfruit)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

// Method : DELETE  || API : localhost:3000/products/delete/_id
router.delete('/delete/:id',validateTokenAdmin, async (req, res) => {
    try {
        const id = req.params.id
        const updatedorganicfruit = await OrganicFruits.findOne({ _id: id })
        if (!updatedorganicfruit) {
            res.status(404).json({ message: "organicfruits are not found" })
        }
        await OrganicFruits.findByIdAndDelete(id)
        return res.status(200).json({ message: "organicfruit is Deleted" })
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