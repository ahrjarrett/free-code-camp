const R = require('ramda')
//  Object.prototype.hasOwnProperty(prop)
//  Object.keys()


function whatsinAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

const whatsInAName = (coll, query) => {
  let query_keys = Object.keys(query)

  return coll.filter(person => {
    for(var i = 0; i < query_keys.length; i++) {
      if(!person.hasOwnProperty(query_keys[i]) || person[query_keys[i]] !== query[query_keys[i]]) {
        return false
      }
    }
    return true
  })
}


//const whatsInAName = (coll, query) => {
//  let query_keys = Object.keys(query)
//
//  return coll.filter(function(person) {
//    for(let i = 0; i < query_keys.length; i++) {
//      if(!coll.hasOwnProperty(query_keys[i]) || coll[query_keys[i]] !== query[query_keys[i]] ) {
//        return false
//      }
//    }
//    return true
//  })
//}



console.log(
  whatsInAName([{ first: "Romeo", last: "Montague" },
                { first: "Mercutio", last: null },
                { first: "Tybalt", last: "Capulet" }],
     { last: "Capulet" }))
//  [{ first: "Tybalt", last: "Capulet" }]

console.log(whatsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))
// [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]


module.exports = whatsInAName

