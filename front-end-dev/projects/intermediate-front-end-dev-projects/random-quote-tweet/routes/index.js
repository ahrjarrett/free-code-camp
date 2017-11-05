var express = require('express')
var router = express.Router()

//var quotes = [
//  {author: 'Ben Franklin', quote: 'A penny saved'},
//  {author: 'Andrew Jarrett', quote: 'Two penny saved'},
//  {author: 'Brit Morrison', quote: 'Three penny saved'}
//]

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Random Quote Machine'
  })
})

//router.get('/test', function(req, res, next) {
//  res.send(quotes)
//})

module.exports = router
