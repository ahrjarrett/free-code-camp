// There’s got to be a better way than acc.push(), right?
const dict = {"C": "G",
              "G": "C",
              "A": "T",
              "T": "A"}

const pairElement = str => {
  const arr = str.split('')

  return arr.reduce((acc, curr) => {
    let pair = [curr, dict[curr]]
    acc.push(pair)

    return acc
  }, [])
}

console.log(pairElement("GCG"))
// [["G", "C"],["C", "G"], ["C", "G"]]
console.log(pairElement("ATCGA"))
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

module.exports = pairElement
