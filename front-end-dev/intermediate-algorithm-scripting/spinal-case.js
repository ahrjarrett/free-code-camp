
const spinalCase = (str) => {
  const regex = /\s+|_+/g
  const spaced = str.replace(/([a-z])([A-Z])/g, '$1 $2')

  return spaced.replace(regex, '-').toLowerCase()
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('thisIsSpinalTap'))

module.exports = spinalCase
