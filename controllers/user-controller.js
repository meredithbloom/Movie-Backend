//dependencies

const express = require('express')
const bcrypt = require('bcrypt')
const user = express.Router()
const Users = require('../models/user.js')
require('dotenv').config()



//index route - show list of all users - will not exist in final app 
user.get('/', (req, res) => {
    Users.find({}, (err, foundUsers) => {
        res.json('Hello world!', foundUsers)
    })
})

//post route (create new user) - create an account
user.post('/createaccount', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    Users.create(req.body, (err, newUser) => {
        if (err) {
            console.log(err)
            res.json(err.message)
        } else {
            console.log('user is created', newUser)
            res.json(newUser)
        }
    })
})

//log in
user.put('/login', (req,res) => {
    console.log(req.body)
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) {
            res.json('oops, there was an error, please try again')
        } else {
            if (!foundUser) {
                res.json('sorry, there is no account with that username')
            } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                res.json({username: foundUser.username})
            } else {
                res.json('username and password do not match')
            }
        }
        
    })
})



//update route (update profile)
user.put('/:id', (req,res) => {
    Users.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        res.json(updatedUser)
    })
})
//delete route - delete profile
user.delete('/:id', (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        res.json(deletedUser)
    })
})


module.exports = user

