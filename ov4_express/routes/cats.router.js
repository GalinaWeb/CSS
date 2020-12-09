const express = require('express')
const catsRouter = express.Router()
const {Cat, sequelize} = require('../models')

// API http (routing)
//routing
//RestFul API (CRUD)
//C - POST (HTTP)
//R - GET (HTTP)
//U - PATCH/PUT (HTTP)
//D - DELETE (HTTP)

catsRouter.get('/', async (req, res) => {
    const cats = await Cat.findAll()
    res.send(cats)
})

catsRouter.get('/:catId', async (req, res) => {
    const catId = req.params.catId
    const cat = await Cat.findOne({
        where: {
            id: catId
        }
    })
    res.send(cat)
})


catsRouter.post('/', async(req, res) => {
    const {name, color, weight, food} = req.body
    const cat = await Cat.create({name, color, weight, food})
    res.send(cat)
})

catsRouter.patch('/:catId', async (req, res) => {
    const catId = req.params.catId
    const {name, color, weight, food} = req.body
    const updateCat = {}
    if (name) updateCat.name = name
    if (color) updateCat.color = color
    if (weight) updateCat.weight = weight
    if (food) updateCat.food = food
    const cat = await Cat.update({name, color, weight, food}, {
        where: {
            id: catId
        }
    })
    res.send(cat)
})

catsRouter.delete('/:catId', (req, res) => {
    const catIndex = +req.params.catId
    cats = cats.filter((_, index) =>{
        return index !== catIndex
    })
    res.send(cats)
})

module.exports = catsRouter