// 04-04-17: BROKEN!
// https://www.freecodecamp.com/challenges/caesars-cipher
// Need to figure out how to make the cipher
// loop back after charcode goes beyond Z

const rot13 = (str) => {
  const arrayed = str.split('')
  const mapped = arrayed.map(letter => {
    const charCode = letter.charCodeAt()
    return charCode
    //return String.fromCharCode(charCode)
  })

  return mapped
}

console.log(rot13("SERR PBQR PNZC")) // => "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")) // => "FREE PIZZA!"
