// 10/31/17: I think I approached this problem wrong.
// See: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-smallest-common-multiple/16075


function smallestCommonMultiple(arr) {
  arr.sort((a, b) => b - a)

  let newArr = []

  for(let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i)
  }


  return newArr
}

console.log(smallestCommonMultiple([6, 12])) // => 12

