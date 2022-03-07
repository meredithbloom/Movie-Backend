const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoritesSchema = new Schema ({
  year: Number,
  title: String,
  info: {
    directors: [String],
    release_date: String,
    rating: Number,
    genres: [String],
    image_url: String,
    plot: String,
    rank: Number,
    running_time_secs: Number,
    actors: [String]
}})

const Favorites = mongoose.model('Favorite', favoritesSchema)

module.exports = Favorites
