const express = require('express')
const movies = express.Router()
const Movies = require('../models/movie.js')
const Users = require('../models/user.js')
const movieSeed = require('../models/movie-data.js')

//movie get route (index)
movies.get('/', (req,res) => {
  Movies.find({}, (err, foundMovie) => {
    res.json(foundMovie);
  })
})

//movie post route (add to database of movies)
movies.post('/', (req, res) => {
  Movies.create(req.body, (err, createdMovie) => {
    res.json(createdMovie)
  })
})

//movie seed route
movies.get('/seed', (req, res) => {
  Movies.create(movieSeed, (err, resetMovies) => {
    res.json(resetMovies)
  })
})


//movie delete route (remove movie from database)
movies.delete('/:id', (req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    res.json(deletedMovie)
  })
})

//update movie data in database
movies.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
    res.json(updatedMovie)
  })
})

module.exports = movies
