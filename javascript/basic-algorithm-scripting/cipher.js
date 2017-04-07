// 04-06-17: FIXED
// ~~04-04-17: BROKEN!~~

const rot13 = (str) => str
  .split('')
  .map(cipher)
  .join('')

const cipher = (letter) => {
  const regex = /[^a-zA-Z]/g
  const ascii = letter.charCodeAt(0)
  if(regex.test(letter)) return letter
  if(ascii > 77) return String.fromCharCode(ascii - 13)
  return String.fromCharCode(ascii + 13)
}

console.log(rot13("SERR PBQR PNZC")) // => "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")) // => "FREE PIZZA!"
