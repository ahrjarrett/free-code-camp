// this is a much more elegant implementation of the recursive `flatten` array; see also './steamroller.js' in this directory

function flatten(array) {
  return Array.isArray(array)
    ? [].concat.apply([], array.map(flatten))
    : array
}

console.log(flatten('a')); // => ["a"]
console.log(flatten([[['b']]])); // => ["b"]
console.log(flatten(['a',['b'],['c']])); // => ["a","b","c"]
console.log(flatten([['a'],'b',['c',['d']]])); // => ["a","b","c","d"]

