function addTogether() {
  var args = Array.prototype.slice.call(arguments)
  var unwind = false

  args.forEach(arg => {
    if(typeof arg !== 'number') unwind = true
  })

  if(unwind) return undefined

  if(args.length === 1)
    return num => typeof num !== 'number'
      ? undefined
      : num + args[0]

  else return args.reduce((acc, curr) => acc + curr, 0)
}

console.log(addTogether(2,3)) // => 5
console.log(addTogether(2)(3)) // => 5
console.log(addTogether("http://bit.ly/IqT6zt")) // => undefined
console.log(addTogether(2, "3")) // => undefined
console.log(addTogether(2)([3])) // => undefined


