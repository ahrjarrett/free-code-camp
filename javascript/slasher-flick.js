const slasher = (people, kill) => {
  const length = people.length - kill
  const popHead = (arr) => arr.reverse().slice(0, length).reverse()

  return length <= 0 ? []
    : popHead(people)
}

console.log(slasher([1, 2, 3], 2))
// => [3]
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5))
// => ["cheese", 4]
console.log(slasher([1, 2, 3], 9))
// => []
