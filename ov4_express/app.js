const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()
const dogsRouter = require('./routes/dogs.router')
const catsRouter = require('./routes/cats.router')
const {sequelize} = require('./models')
const dogsPages = require('./pages/dogs.pages')


async function sync(){
    await sequelize.authenticate()
    console.log('Successful connection')
    await sequelize.sync()
    console.log('Successful sync')
}
sync()

//let dogs = require('./dogs.json')
// let dogs = ['Rex', 'Bobik', 'Tom']

//function saveDogsToFile(){
  //  const dogsJSON = JSON.stringify(dogs)
   // fs.writeFile('./dogs.json', dogsJSON, 'utf8', () => {
   //     console.log('Good')
   // })
//}

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('App root')
})

app.use('/api/dog', dogsRouter)
app.use('/api/cat', catsRouter)

app.use ('/dogs', dogsPages)

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})
