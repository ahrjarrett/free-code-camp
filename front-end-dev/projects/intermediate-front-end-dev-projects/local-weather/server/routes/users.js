var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: 'Bob Ross'
  }, {
    id: 2,
    username: 'Milford Cubicle'
  }])
})

module.exports = router
