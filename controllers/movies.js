const express = require('express')
const movies = express.Router()
const Movies = require('../models/movie.js')
const Users = require('../models/user.js')

movies.get('/', (req,res) => {
  Movies.find({}, (err, foundMovie) => {
    res.json(foundMovie);
  })
})
movies.post('/', (req, res) => {
  Movies.create(req.body, (err, createdMovie) => {
    res.json(createdMovie)
  })
})
movies.delete('/:id', (req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    res.json(deletedMovie)
  })
})
movies.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
    res.json(updatedMovie)
  })
})

module.exports = movies
