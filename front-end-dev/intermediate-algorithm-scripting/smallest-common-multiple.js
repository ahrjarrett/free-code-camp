// 10/31/17: I think I approached this problem wrong.
// See: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-smallest-common-multiple/16075


const smallestCommons = arr => {
  const range = []
  const sortedArr = arr.sort((a, b) => a - b)
  let i = sortedArr[0]
  let wall = sortedArr[1]
  while(i <= wall) {
    range.push(i)
    i++
  }

  let mult = 1

  return range
}

console.log(smallestCommons([1,5])) // => 60
console.log(smallestCommons([5,1])) // => 60
