var Person = function(firstAndLast) {
    var name = firstAndLast.split(' ')
    this.getFirstName = function() { return name[0] }
    this.getLastName = function() { return name[1] }
    this.getFullName = function() { return `${name[0]} ${name[1]}` }
    this.setFirstName = function(n) { name[0] = n }
    this.setLastName = function(n) { name[1] = n }
    this.setFullName = function(n) {
      name[0] = n.split(' ')[0]
      name[1] = n.split(' ')[1]
    }
}

var bob = new Person('Bob Ross')

console.log(Object.keys(bob).length) // => 6
console.log(bob instanceof Person) // => true
console.log(bob.firstName) // => undefined
console.log(bob.lastName) // => undefined
console.log(bob.getFirstName()) // => "Bob"
console.log(bob.getLastName()) // => "Ross"
console.log(bob.getFullName()) // => "Bob Ross"

bob.setFirstName('Haskell')
bob.setLastName('Curry')
console.log(bob.getFirstName()) // => "Haskell"
console.log(bob.getLastName()) // => "Curry"
