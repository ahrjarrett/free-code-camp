
// TODO: Clean this up! Very imperative / method-heavy
const palindrome = (str) => {
  const cleaned = str.replace(/[\W]+/gi, '').toLowerCase().split('')
  if(cleaned.join('') === cleaned.reverse().join('')) return true
  else return false
}

console.log(palindrome('racecar'))
console.log(palindrome('Olivia Tremor Control'))
console.log(palindrome('Ten animals I slam in a net.'))

module.exports = palindrome

