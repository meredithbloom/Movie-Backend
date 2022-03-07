const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  name: {type:String, required:true},
  email: {type:String, required:true, unique:true},
  username: {type: String, required:true, unique:true},
  password: {type:String, required:true},
  profilePic: {type: String, default: './userimage.png'}
})

const Users = mongoose.model('User', userSchema)

module.exports = Users
