const mutation = (arr) => {
  const testAgainst = arr[0].toLowerCase()
  const test = arr[1].toLowerCase()

  for(let i = 0; i < test.length; i++) {
    let character = test[i]
    if(testAgainst.indexOf(character) === -1) {
      return false
    }
  }

  return true
}


console.log(mutation(["Sup", "up"])) // => true
console.log(mutation(["sup", "duck"])) // => false
console.log(mutation(["Alien", "line"])) // => true
