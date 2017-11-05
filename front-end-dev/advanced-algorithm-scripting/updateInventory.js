function invertKeysAndValues(obj) {
  let result = {}
  for(let key in obj) {
    result[obj[key]] = key
  }
  return result
}

function updateInventory(arr1, arr2) {
  let newInventory = {}

  arr1.forEach(item => {
    if(Object.keys(newInventory).includes(item[1]))
      newInventory[item[1]] = newInventory[item[1]] + item[0]
    else newInventory[item[1]] = item[0]
  })

  arr2.forEach(item => {
    if(Object.keys(newInventory).includes(item[1]))
      newInventory[item[1]] = newInventory[item[1]] + item[0]
    else newInventory[item[1]] = item[0]
  })

  return Object.entries(newInventory)
    .map(i => i.reverse())
    .sort((a, b) => a[1] > b[1] ? 1 : -1)
}

// Example inventory lists
var currInv =
    [ [21, "Bowling Ball"]
    , [2, "Dirty Sock"]
    , [1, "Hair Pin"]
    , [5, "Microphone"] ]

var newInv =
    [ [2, "Hair Pin"]
    , [3, "Half-Eaten Apple"]
    , [67, "Bowling Ball"]
    , [7, "Toothpaste"] ]

console.log(updateInventory(currInv, newInv))

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
// => [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
