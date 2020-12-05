const express = require('express')
const dogsRouter = express.Router()
const {Dog, sequelize} = require('../models')


// API http (routing)
//routing
//RestFul API (CRUD)
//C - POST (HTTP)
//R - GET (HTTP)
//U - PATCH/PUT (HTTP)
//D - DELETE (HTTP)

dogsRouter.get('/', async (req, res) => {
    const dogs = await Dog.findAll()
    res.send(dogs)
})

dogsRouter.get('/:dogId', async (req, res) => {
    const dogId = req.params.dogId
    const dog = await Dog.findOne({
        where: {
            id: dogId
        }
    })
    res.send(dog)
})


dogsRouter.post('/', async(req, res) => {
    const {name, breed, age} = req.body
    const dog = await Dog.create({name, breed, age})
    res.send(dog)
    //saveDogsToFile()
})

dogsRouter.patch('/:dogId', async (req, res) => {
    const dogId = req.params.dogId
    const {name, breed, age} = req.body
    //const updateDog = {}
    //if (name) updateDog.name = name
    //if (breed) updateDog.breed = breed
    //if (age) updateDog.age = age
    const dog = await Dog.update({name, breed, age}, {
        where: {
            id: dogId
        }
    })
    res.send(dog)
    //const newDogName = req.body.name
    //dogs[dogIndex] = newDogName
    //res.send(dogs)
    //saveDogsToFile()
})

dogsRouter.delete('/:dogId', (req, res) => {
    const dogIndex = +req.params.dogId
    dogs = dogs.filter((_, index) =>{
        return index !== dogIndex
    })
    res.send(dogs)
    //saveDogsToFile()
})

module.exports = dogsRouter