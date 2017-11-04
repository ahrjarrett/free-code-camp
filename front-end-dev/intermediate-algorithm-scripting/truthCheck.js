function truthCheck(coll, pred) {
  var values = []
  coll.map(item => {
    values.push(item[pred])
  })

  return values.reduce((acc, curr) => {
    if(acc && curr) return true
    else return false
  }, true)
}

console.log(
  truthCheck(
    [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}],
    "sex"
)) // => true

console.log(
truthCheck(
  [{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}],
  "sex"
)) // => false

