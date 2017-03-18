// CHALLENGE: Refactor factorialize

// First thought is, could use a reduce.
// Second thought is, could be recursive.
function factorialize(num) {

}

function factorializeImperative (num) {
  var total = 1
  while(num > 0) {
    total *= num
    num--
  }
  return total
}

// factorialize(5) should equal 120

module.exports = factorialize
