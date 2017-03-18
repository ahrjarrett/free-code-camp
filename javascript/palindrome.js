function palindrome(str) {
  return test(str)
}
function test(str) {
  console.log(str

    .split('')
      .replace(/\s/, '')
    )
}


console.log(palindrome('racecar'))
console.log(palindrome('not a palindrome'))

module.exports = palindrome

