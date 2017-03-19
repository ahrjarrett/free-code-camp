// this is so imperative it hurts

function titleCase(str) {
  const wordsArray = str.toLowerCase().split(' ')
  let words = []

  wordsArray.forEach(word => {
    let first = word.charAt(0).toUpperCase()
    let sliced = word.slice(1)
    words.push(first + sliced)
  })

  return words.join(' ')
}

console.log(titleCase('there was an old woman who lived in a shoe'))
