const getIndexToIns = (arr, num) => {
  const sorted = arr
    .slice()
    .concat(num)
    .sort((a, b) => a - b)

  return sorted.indexOf(num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // => 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // => 2
console.log(getIndexToIns([40, 60], 50)) // => 1
