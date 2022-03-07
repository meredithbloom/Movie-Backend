const express = require('express')
const watchList = express.Router()
const WatchLists = require('../models/watchlist.js')
const cors = require('cors')



//WatchList get route (index)
watchList.get('/', (req,res) => {
  WatchLists.find({}, (err, foundWatchList) => {
    res.json(foundWatchList);
  }).limit(20)
})

//WatchList post route (add to database of WatchList)
watchList.post('/', (req, res) => {
  WatchLists.create(req.body, (err, createdWatchList) => {
    res.json(createdWatchList)
  })
})


//WatchList delete route (remove WatchList from database)
watchList.delete('/:id', (req, res) => {
  WatchLists.findByIdAndRemove(req.params.id, (err, deletedWatchList) => {
    res.json(deletedWatchList)
  })
})

//update WatchList data in database
watchList.put('/:id', (req, res) => {
  WatchLists.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWatchList) => {
    res.json(updatedWatchList)
  })
})

module.exports = watchList
