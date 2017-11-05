
const pairwise = (arr, sum) => {
  let newArr = arr.slice()

  return newArr.reduce((acc, curr, i) => {
    const goal = sum - curr

    if (newArr.indexOf(goal) !== -1 && newArr.indexOf(goal) !== i) {
      let subTotal = newArr.indexOf(goal) + i
      newArr.splice(i, 1, undefined)
      newArr.splice(newArr.indexOf(goal), 1, undefined)
      return acc + subTotal
    }

    return acc
  }, 0)
}











console.log(pairwise([1,4,2,3,0,5], 7))
// -> [4,3] [2,5] -> [1+3] + [2+5] => 11
console.log(pairwise([1, 3, 2, 4], 4))
// => 1
console.log(pairwise([1, 1, 1], 2))
// => 1
// const pairwise = (arr, total) => {
//   const bail = arr.length / 2
//   console.log(bail)
//   let idx = []
//
//   arr.map((num, i) => {
//     // num : 1, i : 0
//     if (arr.includes(total - num)) {
//       console.log(idx)
//       idx.push(arr[i])
//       idx.push(arr.indexOf(total - num))
//
//     }
//
//   })
//
//   return idx
// }



// const pairwise = (arr, arg) => {
//   let idxs = []
//   return arr.reduce((acc, curr) => {
//     return arr.map(a => {
//       if(curr + a === arg) {
//         idxs.push(arr.indexOf(a))
//
//         return acc.concat(a)
//       }
//       return acc
//     })
//   }, [])
// }
