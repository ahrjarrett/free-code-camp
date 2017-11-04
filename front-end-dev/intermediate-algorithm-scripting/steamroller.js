const steamroller = arr => {
  let result = []

  function flatten(arg) {
    if(!Array.isArray(arg)) {
      result.push(arg)
    } else {
      for (var a in arg) {
        flatten(arg[a])
      }
    }
  }

  arr.forEach(flatten)
  return result
}

console.log(steamroller([1, [2], [3, [4]]]))

