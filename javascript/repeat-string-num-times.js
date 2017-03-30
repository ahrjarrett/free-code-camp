// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

// again, not proud of this one
const repeatStringNumTimes = (str, num) => {
  if(num < 0) return ''
  let results = ''
  for(let i = 0; i < num; i++) {
    results += str
  }
  return results
}

console.log(repeatStringNumTimes('noise', 3))
