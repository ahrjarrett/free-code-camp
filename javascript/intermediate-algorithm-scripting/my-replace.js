// Rewrite so that we’re not mutating (i.e. no Array.prototype.splice())
// Also maybe clean up the login in newAfter, remove some assignment?
const myReplace = (str, before, after) => {

  const array = str.split(' ')
  const regex = new RegExp(before)

  const newAfter = before.replace(regex, match => {
    if(match[0] === match[0].toUpperCase()) {
      let head = after[0].toUpperCase(),
          tail = after.split('').slice(1).join('')
      return head + tail
    } else {
      return after
    }
  })

  const index = array.indexOf(before)

  // array is mutated here!
  array.splice(index, 1, newAfter)

  return array.join(' ')
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "freaked"))
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "gleaked"))

module.exports = myReplace
