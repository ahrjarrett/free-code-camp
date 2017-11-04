function isPrime(n) {
  var mod = 2
  if(n === 1) return false
  while(mod <= n / 2) {
    if(n % mod === 0) {
      return false
    }
    mod += 1
  }
  return true
}

function sumPrimes(n) {
  var result = []
  var init = 1
  while(init <= n) {
    if(isPrime(init)) {
      result.push(init)
    }
    init += 1
  }
  return result.reduce(function(acc, curr) {
    return acc += curr
  }, 0)
}

var result = sumPrimes(10) // => 17

console.log(result)
