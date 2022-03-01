const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


app.use(express.json())
app.use(cors())

app.listen(3000, () => {
  console.log('I am listening....movies...');
})

mongoose.connect('mongodb://localhost:27017/movies')
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...movies....');
})
