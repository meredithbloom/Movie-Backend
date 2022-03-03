//dependencies

const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const mongoose = require('mongoose')
require('dotenv').config()

const User = require('../models/user')
const userController = require('./user-controller')























module.exports = sessions