// this was the easiest one ever
const bouncer = arr => arr.filter(item => item)

console.log(bouncer([7, "ate", "", false, 9]))
// => [7, "ate", 9]
console.log(bouncer(["a", "b", "c"]))
// => ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
// => []
