const fibs = num => {
  let i = 1,
      arr = [1]
  while(i <= num) {
    arr.push(i)
    i = arr[arr.length-1] + arr[arr.length-2]
  }
  return arr
}

const sumFibs = num => fibs(num)
  .filter(n => n % 2)
  .reduce((acc, curr) => acc + curr, 0)

console.log(sumFibs(1000)) // => 1785
console.log(sumFibs(4000000)) // => 4613732.
