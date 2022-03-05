// dependencies

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')
const bcrypt = require('bcrypt')
const session = require('express-session')
require('dotenv').config()

//models & controllers

const userController = require('./controllers/user-controller.js')
const movieController = require('./controllers/movies.js')

//port
const PORT = process.env.PORT || 3003

//database
const PROJECT3_DB = process.env.PROJECT3_DB

mongoose.connect(PROJECT3_DB, {useNewUrlParser:true})


// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

//middleware

app.use(express.json())
app.use(cors())
app.use('/users', userController)
app.use('/movies', movieController)

//listener
app.listen(PORT, () => {
  console.log('I am listening....movies... on port: ', PORT);
})

//connect to mongo and fix depreciation warnings from mongoose
