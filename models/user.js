const mongoose = require('mongoose')
const Favorites = require('./favorites')
const WatchLists = require('./watchlist')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  name: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  username: {type: String, required:true, unique:true},
  password: {type:String, required:true},
  profilePic: { type: String, default: './userimage.png' },
  favoriteGenre: {type:String},
  streamingProviders: [String],
  favoriteMovie: {type:String},
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' }],
  watchList: [{type: mongoose.Schema.Types.ObjectId, ref: 'WatchList'}]

})

const Users = mongoose.model('User', userSchema)

module.exports = Users
