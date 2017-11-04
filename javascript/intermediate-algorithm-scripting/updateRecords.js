var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
}

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection))

// id: Int, prop: String, value: String -> Object
function updateRecords(id, prop, value) {
  var record = collection[id]

  if (prop !== 'tracks' && value) {
    record[prop] = value
  }

  if (prop === 'tracks' && record.tracks) {
    record.tracks.push(value)
  }

  if (prop === 'tracks' && !record.tracks) {
    record.tracks = []
    record.tracks.push(value)
  }

  if (!value) {
    delete record[prop]
  }

  return record
}

console.log(updateRecords(5439, "artist", "ABBA"))
//console.log(updateRecords(2468, "artist", "Metal Heads"))
//console.log(updateRecords(2548, "artist", "Motley Crue"))
//console.log(updateRecords(1245, "tracks", "this is a new track"))
//console.log(updateRecords(5439, "tracks", "this is another new tracks"))
//console.log(updateRecords(2468, "artist", ""))
