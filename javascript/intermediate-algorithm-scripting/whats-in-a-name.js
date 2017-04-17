const R = require('ramda')
//  Object.prototype.hasOwnProperty(prop)
//  Object.keys()


const whatsInAName = (coll, query) => {

  return coll.map(person => {
    return Object.keys(person)
  }
}



console.log(
  whatsInAName([{ first: "Romeo", last: "Montague" },
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }],
     { last: "Capulet" }))
//  [{ first: "Tybalt", last: "Capulet" }]

module.exports = whatsInAName

