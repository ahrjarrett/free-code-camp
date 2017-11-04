function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return regex.test(str)
}



console.log('TRUE? --- ', telephoneCheck("555-555-5555")) // => true
console.log('TRUE? --- ', telephoneCheck("1 (555) 555-5555")) // => true
console.log('TRUE? --- ', telephoneCheck("5555555555")) // => true
console.log('TRUE? --- ', telephoneCheck("555-555-5555")) // => true
console.log('TRUE? --- ', telephoneCheck("(555)555-5555")) // => true
console.log('TRUE? --- ', telephoneCheck("1(555)555-5555")) // => true
console.log('FALSE? --- ', telephoneCheck("555-5555")) // => false
console.log('FALSE? --- ', telephoneCheck("5555555")) // => false
console.log('FALSE? --- ', telephoneCheck("1 555)555-5555")) // => false
console.log('TRUE? --- ', telephoneCheck("1 555 555 5555")) // => true
console.log('TRUE? --- ', telephoneCheck("1 456 789 4444")) // => true
console.log('FALSE? --- ', telephoneCheck("123**&!!asdf#")) // => false
console.log('FALSE? --- ', telephoneCheck("55555555")) // => false
console.log('FALSE? --- ', telephoneCheck("(6505552368)")) // => false
console.log('FALSE? --- ', telephoneCheck("2 (757) 622-7382")) // => false
console.log('FALSE? --- ', telephoneCheck("0 (757) 622-7382")) // => false
console.log('FALSE? --- ', telephoneCheck("-1 (757) 622-7382")) // => false
console.log('FALSE? --- ', telephoneCheck("2 757 622-7382")) // => false
console.log('FALSE? --- ', telephoneCheck("10 (757) 622-7382")) // => false
console.log('FALSE? --- ', telephoneCheck("27576227382")) // => false
console.log('FALSE? --- ', telephoneCheck("(275)76227382")) // => false
console.log('FALSE? --- ', telephoneCheck("2(757)6227382")) // => false
console.log('FALSE? --- ', telephoneCheck("2(757)622-7382")) // => false
console.log('FALSE? --- ', telephoneCheck("555)-555-5555")) // => false
console.log('FALSE? --- ', telephoneCheck("(555-555-5555")) // => false
console.log('FALSE? --- ', telephoneCheck("(555)5(55?)-5555")) // => false

//function checkAndTrimAreaCode(str) {
//  if(str.length === 11 && str[0] === '1')
//    return str.slice(1)
//  else return str
//}
//
//function telephoneCheck(str) {
//
//  if(str[0] === '(' ) return false
//  if(!parseInt(str[0])) return false
//
//  var trimmed = str.split('').map(c =>
//    c.replace(/\D/, ''))
//    .join('')
//
//  var noAreaCode = checkAndTrimAreaCode(trimmed)
//
//  if(noAreaCode.length !== 10) return false
//
//  return true
//}
