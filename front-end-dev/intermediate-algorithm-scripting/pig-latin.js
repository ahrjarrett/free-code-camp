const vowels = ["a","e","i","o","u"]

const pigLatin = (str) => {
  let test = false
  vowels.map(l => {
    if(str[0] === l) test = true
  })

  if(test === true) return str + "way"

  let index = []

  str.split('').map(l => {
    return vowels.map(v => {
      if(l === v) index.push(str.indexOf(l))
    })
  })

  let head = str.slice(0, index[0]),
      tail = str.slice(index[0])

  return tail + head + 'ay'

}

console.log(pigLatin("consonant")) // "onsonantcay"
console.log(pigLatin("eight")) // "eightway"
console.log(pigLatin("glove")) // "oveglay"
module.exports = pigLatin
