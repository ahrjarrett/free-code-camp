const flatMapUniq = function(arr) {
  return Array.prototype.slice.call(arguments)
    .reduce((acc, curr) => {
      curr.filter(item => {
        if(acc.indexOf(item) === -1) acc.push(item)
      })
      return acc
    }, [])
}

console.log(flatMapUniq([1, 3, 2], [5, 2, 1, 4], [2, 1])) // [1,3,2,5,4]
module.exports = flatMapUniq
