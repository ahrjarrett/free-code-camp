const fearNotLetter = str => {
  let i = 0
  while(i < str.length) {
    let charCode = str.charCodeAt(i)
    if(charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1)
    }
    i = i + 1
  }
  return undefined
}

console.log(fearNotLetter("abce")) // "d"
console.log(fearNotLetter("bd")) // "c"
console.log(fearNotLetter("xyz")) // undefined

module.exports = fearNotLetter
