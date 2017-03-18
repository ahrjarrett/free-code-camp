const findLongestWord = (str) => {
  return str.split(' ')
    .sort((a, b) => b.length - a.length)
    .slice(0, 1)[0]
    .length
}

const testA = 'The quick brown fox jumped over the lazy dog'
const testB = 'What if we try a super-long word such as otorhinolaryngology'
const testC = 'Rickrolled'

console.log(findLongestWord(testA))
console.log(findLongestWord(testB))
console.log(findLongestWord(testC))

module.exports = findLongestWord
