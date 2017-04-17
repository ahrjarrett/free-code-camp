const R = require('ramda')
//  Object.prototype.hasOwnProperty(prop)
//  Object.keys()


const whatsInAName = (coll, query) => {
  return coll.map(person => {
    if(person.hasOwnProperty(query)) {
      return query

    }
  })
}



console.log(
  whatsInAName([{ first: "Romeo", last: "Montague" },
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }],
     { last: "Capulet" }))
//  [{ first: "Tybalt", last: "Capulet" }]

module.exports = whatsInAName

