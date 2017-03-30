// write a fn that truncates a str
// if longer than the second argument
const truncateStr = (str, num) => {
  const arr = str.split('').slice(0, num).reverse()
  let newArr = arr

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


console.log(
  truncateStr("A-tistket a-tasket A green and yellow basket", 11))
console.log(
  truncateStr("A-tistket a-tasket A green and yellow basket", 3))
