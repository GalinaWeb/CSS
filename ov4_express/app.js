const fs = require('fs')
const express = require('express')
const app = express()
let dogs = require('./dogs.json')
// let dogs = ['Rex', 'Bobik', 'Tom']

function saveDogsToFile(){
    const dogsJSON = JSON.stringify(dogs)
    fs.writeFile('./dogs.json', dogsJSON, 'utf8', () => {
        console.log('Good')
    })
}


app.use(express.json())

// API http (routing)
//routing
//RestFul API (CRUD)
//C - POST (HTTP)
//R - GET (HTTP)
//U - PATCH/PUT (HTTP)
//D - DELETE (HTTP)

app.get('/', (req, res) => {
    res.send('App root')
})

app.get('/api/dog', (req, res) => {
    res.send(dogs)
})

app.get('/api/dog/:id', (req, res) => {
    const dogIndex = req.params.id
    res.send(dogs[dogIndex])
})


app.post('/api/dog', (req, res) => {
    const newDog = req.body.name
    dogs.push(newDog)
    res.send(dogs)
    saveDogsToFile()
})

app.patch('/api/dog/:dogId', (req, res) => {
    const dogIndex = req.params.dogId
    const newDogName = req.body.name
    dogs[dogIndex] = newDogName
    res.send(dogs)
    saveDogsToFile()
})

app.delete('/api/dog/:dogId', (req, res) => {
    const dogIndex = +req.params.dogId
    dogs = dogs.filter((_, index) =>{
        return index !== dogIndex
    })
    res.send(dogs)
    saveDogsToFile()
})

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})
