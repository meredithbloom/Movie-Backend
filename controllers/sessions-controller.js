//dependencies
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const mongoose = require('mongoose')
require('dotenv').config()

const Users = require('../models/user')
const userController = require('./user-controller')

//middleware
sessions.use(express.json())
sessions.use(express.urlencoded({extended:true}))


//log-in path
sessions.post('/', (req,res) => {

})

















module.exports = sessions
