const whatIsInAName = (coll, query) => {
  let keys = Object.keys(query),
      i = 0

  return coll.filter(person => {
    while(i < keys.length) {
      if(!person.hasOwnProperty(keys[i]) || person[keys[i]] !== query[keys[i]]) {
        return false
      }
      i++
    }
    return true
  })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
                           { first: "Mercutio", last: null },
                           { first: "Tybalt", last: "Capulet" }],
                      { last: "Capulet" }))
                   // { first: "Tybalt", last: "Capulet" }]

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))
// [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

