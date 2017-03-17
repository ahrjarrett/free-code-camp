
//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
]


function lookUpProfile(firstName, prop){
// Only change code below this line

  var results = contacts.filter(function(contact) {
    return contact.firstName == firstName
  });

  // THOUGHT: Could use map to handle these return statements?
  if(!results[0]) return "No such contact"
  if(!results[0][prop]) return "No such property"
  return results[0][prop]

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes")
