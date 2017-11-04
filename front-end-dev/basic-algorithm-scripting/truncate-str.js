// write a fn that truncates a str
// if longer than the second argument
const truncateStr = (str, num) => {
  const arr = str.split('').slice(0, num).reverse()
  let newArr = arr

  if(num >= str.length) return str

  if(num <= 3) {
    return newArr.reverse().join('').concat('...')
  }

  if(num > 3) {
    newArr[0] = '.'
    newArr[1] = '.'
    newArr[2] = '.'
    return newArr.reverse().join('')
  }
}

const test = "A-tistket a-tasket a green and yellow basket"

console.log(
  truncateStr(test, 11))
console.log(
  truncateStr(test, 3))
console.log(
  truncateStr(test, test.length))
console.log(
  truncateStr(test, test.length + 2))
