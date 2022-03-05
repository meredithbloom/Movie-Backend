// dependencies

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')
const bcrypt = require('bcrypt')
const session = require('express-session')
const axios = require('axios')
require('dotenv').config()
const SECRET = process.env.SECRET

//models & controllers

const Users = require('./models/user')
const userController = require('./controllers/user-controller.js')


//port
const PORT = process.env.PORT || 3003

//database
const PROJECT3_DB = process.env.PROJECT3_DB


//middleware

app.use(express.json())
app.use(cors())
app.use('/users', userController)
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
)

//connect to mongo and fix depreciation warnings from mongoose
mongoose.connect(PROJECT3_DB)


// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));


//listener
app.listen(PORT, () => {
  console.log('I am listening....movies... on port: ', PORT);
})


