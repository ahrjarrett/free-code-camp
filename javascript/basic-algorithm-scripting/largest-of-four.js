// another mutative solution
const largestOfFour = (arr) => {
  let larges = []

  arr.forEach((subArr) => {
    let sorted = subArr.sort((m, n) => n - m)
    larges.push(sorted[0])
  })

  return larges
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
