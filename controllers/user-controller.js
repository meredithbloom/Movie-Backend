//dependencies

const express = require('express')
const bcrypt = require('bcrypt')
const user = express.Router()
const Users = require('../models/user.js')
const favoritesController = require('./favorites')
const watchListController = require('./watchlist')

const Favorite = require('../models/favorites')
const WatchList = require('../models/watchlist')

require('dotenv').config()



//index route - show list of all users - will not exist in final app 
user.get('/', (req, res) => {
    Users.find({}, (err, foundUsers) => {
        res.json(foundUsers)
    })
})

//specific user route - for user profile page
// user.get('/:id', (req, res) => {
//     Users.findById(req.params.id, (err, foundUser) => {
//         Favorite.find({ _id: { $in: foundUser.favorites } }, (error, foundMovies) => {
//             res.json(foundMovies)
//         })
//         res.json(foundUser)
//     })
// })

user.get('/:id', (req, res) => {
    Users.findById(req.params.id, (err, foundUser) => {
        res.json(foundUser)
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
    Users.findOne({username: req.body.username}, (err, foundUser) => {
        if (err) {
            res.json('oops, there was an error, please try again')
        } else {
            if (!foundUser) {
                res.json('sorry, there is no account with that username')
            } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                console.log(foundUser)
                res.json(foundUser)
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

