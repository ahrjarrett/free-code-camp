const chunkArrayInGroups = (arr, size) => {
  let i,
      newArray = []

  for(i = 0; i < arr.length; i += size) {
    let subArray = arr.slice(i, i + size)
    newArray.push(subArray)
  }

  return newArray
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
// [["a, "b"], ["c", "d"]]
