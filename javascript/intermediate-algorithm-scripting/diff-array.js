const diffArray = (arr1, arr2) => {
  let newArray = []
  arr1.forEach(item => {
    if(arr2.indexOf(item) === -1) newArray.push(item)
  })
  arr2.forEach(item => {
    if(arr1.indexOf(item) === -1) newArray.push(item)
  })
  return newArray
}

console.log(diffArray([1,2,3,4,5], [2,4,6,8]))
// [1, 3, 5, 6, 8]

module.exports = diffArray
