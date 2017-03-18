// CHALLENGE: Refactor factorialize

// First thought is, could use a reduce.
// Second thought is, could be recursive.
// Third thought is, it should be tail recursive.
function reduce_factorial (n) {


}

// RECURSIVE (TAIL)
const recur_factorial = (n) => _fact(n, 1)

const _fact = (n, a) =>
  n === 1 ?
    a
    : _fact(n - 1, n * a)


//function recur_factorial (n) {
//  return _recur_helper (n, 1)
//}

//function _recur_helper (n, a) {
//  // why return a, and not 1?
//  if(n === 1) return a
//  else return _recur_helper(n - 1, n * a)
//}

console.log(recur_factorial(5))
console.log(recur_factorial(1))


function imperativeFactorialize (n) {
  var total = 1
  while(n > 0) {
    total *= n
    n--
  }
  return total
}


module.exports = recur_factorial
