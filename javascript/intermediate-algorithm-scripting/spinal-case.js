
const separateWords = str => {
  let changed = lowerCaseFirst(str)
  return changed.replace(/([A-Z])/g, ' $1')
}

// kinda hacky way to avoid inserting a space
const lowerCaseFirst = str => {
  let first = str[0].toLowerCase()
  return first + str.slice(1)
}

const insertDashes = str => str.split(/\s+/g).join('-')

const toLower = str => str.toLowerCase()

const spinalCase = str => str

console.log(spinalCase('TestingSpinalCase'))
console.log(spinalCase('testing spinal case'))
console.log(separateWords('Testing Separate Words'))
console.log(separateWords('testingSeparateWords'))
console.log(insertDashes('Testing  Insert Dashes'))
console.log(insertDashes('testingInsertDashes'))

module.exports = spinalCase

//function separateWords(str) {
//  return str.replace(/([A-Z])/g, ' $1' );
//  }
//
//  function toLower(str) {
//    return str.toLowerCase();
//    }
//
//    function insertDashes(str) {
//      return str.split(' ').join('-');
//        //var newArray = str.split(' ');
//          //return newArray.map(function(word) {
//            //  return word.replace(/\s/g, '-');
//              //});
//
//                //return str.replace(/\s/g, '-');
//                }
//
//
//                function spinalCase(str) {
//
//                  return insertDashes(toLower(separateWords(str)));
//
//                  }
