const express = require('express')
const favorites = express.Router()
const Favorites = require('../models/favorites.js')
const cors = require('cors')



//favorites get route (index)
favorites.get('/', (req,res) => {
  Favorites.find({}, (err, foundFavorite) => {
    res.json(foundFavorite);
  }).limit(20)
})

//favorite post route (add to database of favorites)
favorites.post('/', (req, res) => {
  Favorites.create(req.body, (err, createdFavorite) => {
    res.json(createdFavorite)
  })
})


//favorite delete route (remove favorite from database)
favorites.delete('/:id', (req, res) => {
  Favorites.findByIdAndRemove(req.params.id, (err, deletedFavorite) => {
    res.json(deletedFavorite)
  })
})

//update favorite data in database
favorites.put('/:id', (req, res) => {
  Favorites.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedFavorite) => {
    res.json(updatedFavorite)
  })
})

module.exports = favorites
