const express = require('express')
const router = express.Router()
const Movies = require('../models/movie.js')
const Users = require('../models/user.js')

router.get('/', (req,res) => {
  Movies.find({}, (err, foundMovie) => {
    res.json(foundMovie);
  })
})
router.post('/', (req, res) => {
  Movies.create(req.body, (err, createdMovie) => {
    res.json(createdMovie)
  })
})
router.delete('/:id', (req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    res.json(deletedMovie)
  })
})
router.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMovie) => {
    res.json(updatedMovie)
  })
})

module.exports = router
