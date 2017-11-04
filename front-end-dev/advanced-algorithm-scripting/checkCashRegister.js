function checkCashRegister(price, cash, cid) {
  const denominations = { "PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000 }
  let changeDue = (cash * 100 - price * 100)
  const register = cid
    .reverse()
    .map(curr => [curr[0], Math.round(curr[1]*100)])

  const registerTotal = register.reduce((sum, curr) => (sum + curr[1]), 0)

  if (changeDue > registerTotal ) return "Insufficient Funds"
  if (changeDue === registerTotal ) return "Closed"

  let partial
  let change = register.reduce((acc, curr) => {
    partial = Math.min(curr[1], Math.floor(changeDue / denominations[curr[0]]) * denominations[curr[0]])
    if ( partial > 0 ) {
      changeDue -= partial
      acc.push([curr[0], partial / 100])
    } return acc
  }, [])

  // if change is STILL due, need to return that funds are insufficient:
  if (changeDue > 0 ) return "Insufficient Funds"

  return change
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// => [["QUARTER", 0.50]]
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// => [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// => "Insufficient Funds"
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// => "Insufficient Funds"
console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// => "Closed"
