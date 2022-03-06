const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  name: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  username: {type: String, required:true, unique:true},
  password: {type:String, required:true}, 
  profilePic: {type: String, default: 'https://www.kindpng.com/picc/m/107-1079551_cinema-vector-popcorn-with-cartoon-film-3d-clipart.png'}
})

const Users = mongoose.model('User', userSchema)

module.exports = Users
