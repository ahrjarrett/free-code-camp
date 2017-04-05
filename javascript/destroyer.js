// 04-04-17: For some reason this only works as a function
//           declaration? Need to play with this more.

function destroyer(arr) {
  const args = Array.prototype.slice.call(arguments, 1)
  return arr.filter(item => {
    if(!args.includes(item)) return item;
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// => [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
// => [1, 5, 1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
// => [1]

