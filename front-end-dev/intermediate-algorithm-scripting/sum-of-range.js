const sumAll = (arr) => {
  let sorted = arr.sort(function(a, b) {
    return a - b
  })
  let range = []

  while(sorted[0] <= sorted[1]) {
    range.push(sorted[0])
    sorted[0]++
  }
  return range.reduce((acc, curr) => { return acc + curr }, 0)
}

console.log(sumAll([1, 4])) // 10

module.exports = sumAll
