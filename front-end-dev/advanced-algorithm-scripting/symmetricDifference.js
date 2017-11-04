// TODO: make sym tail-recursive by writing helper fn that puts SYM call in tail-position

const difference = (A, B) => new Set([...A].filter(n => !B.has(n)))
const first = L => L[0]
const rest = L => L.slice(1)

// A ∆ B = [A ∖ B] ∪ [B ∖ A]
function sym(...args) {
  const A = new Set(first(args)),
        B = new Set(first(rest(args)))

  if(!B.size) return [...A]

  return sym([...difference(A, B), ...difference(B, A)], ...rest(rest(args)))
}

console.log(sym([1, 2, 3])) // => [1, 2, 3]
console.log(sym([1, 2, 3], [5, 2, 1, 4])) // => [3, 5, 4]
console.log(sym([1, 2, 3], [5, 2, 1, 4], [4, 1, 9])) // => [3, 5, 9]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
// => [ 7, 4, 6, 2, 5, 9, 8, 1 ]
