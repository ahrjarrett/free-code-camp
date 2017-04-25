// http://stackoverflow.com/questions/8845154/how-does-the-the-fibonacci-recursive-function-work

// Right now the base case isn't working! Hitting max call stack:

var sequence = [1, 1];

// this is mutative!
function fibonacci(num) {
  var highest = sequence.reverse()[0];
  var nextHighest = sequence.reverse()[1];
  var next = highest + nextHighest;

  if(highest > num) return sequence;

  sequence.push(next);
  return fibonacci(next);
}

function sumFibs(num) {
  return num;
}

function isOdd(num) {
  return num % 2 === 1 ? true : false;
}

//sumFibs(4);
console.log(fibonacci(4)); // 7

