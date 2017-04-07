var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Random Quote Machine',
    quotes: [
      {author: 'Ben Franklin', quote: 'A penny saved'},
      {author: 'Andrew Jarrett', quote: 'Two penny saved'},
      {author: 'Brit Morrison', quote: 'Three penny saved'}
    ]
  })
})

// NOT WORKING
router.get('/test', function(req, res, next) {
  res.JSON({"does this work?": "testing"})
})

module.exports = router
