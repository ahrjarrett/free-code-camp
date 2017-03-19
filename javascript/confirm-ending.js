const confirmEnding = (str, target) => {
  let reverseArr = str.split('').reverse()
  let length = target.length
  let capture = reverseArr.slice(0, length).reverse().join('')

  return capture === target
}

console.log(confirmEnding('Dapper Dan and Peter Pan', 'n')) // true
console.log(confirmEnding('The Problem with Biography', '!')) // false
console.log(confirmEnding('She sells seashells by the sea shore', 'shore')) // true
