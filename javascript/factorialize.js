function factorialize(num) {
  var total = 1
  while(num > 0) {
    total *= num
    num--
  }
  return total
}

// factorialize(5) should equal 120

module.exports = factorialize
