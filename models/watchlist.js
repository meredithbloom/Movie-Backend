const mongoose = require('mongoose')
const Schema = mongoose.Schema

const watchListSchema = new Schema ({
  adult: Boolean,
  backdrop_path: String,
  title: String,
  genre_ids: [Number],
  original_language: String,
  original_title: String,
  poster_path: String,
  id: Number,
  vote_average: Number,
  vote_count: Number,
  overview: String,
  release_date: String,
  video: Boolean,
  popularity: Number,
  media_type: String

})

const WatchLists = mongoose.model('WatchList', watchListSchema)

module.exports = WatchLists
