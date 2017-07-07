// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
const head = arr => arr[0]
const findElement = (arr, fn) => head(arr.filter(n => fn(n)))

console.log(findElement([1,2,3,4], function(num) { return num % 2 === 0 }))
