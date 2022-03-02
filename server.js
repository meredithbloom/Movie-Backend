const express = require('express')
const app = express()
const mongoose = require('mongoose')
const movieControllers = require('./controllers/movies.js')
const cors = require('cors')
const db = mongoose.connection;
require('dotenv').config()

const PORT = process.env.PORT || 3003;

const PROJECT3_DB = process.env.PROJECT3_DB

db.on('error', (err) => console.log(err.message + ' is Mongod not running?...'))
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected......'))

app.use(express.json())
app.use(cors())
app.use('/movies', movieControllers)

app.listen(3000, () => {
  console.log('I am listening....movies...');
})

mongoose.connect('mongodb://localhost:27017/movies')
