const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title: String,
  genres: [String],
  director: String,
  actors: [String],
  year: Number,
  rating: Number,
  duration: String,
  platforms: [String]
})

const Movies = mongoose.model('Movie', movieSchema)

module.exports = Movies
