const lookup = {'&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                '\'': '&apos;'}
const keys = Object.keys(lookup)

const convertHTML = str => {
  let newStr = str
  keys.map(key => {
    let regex = new RegExp(key, 'g')
    newStr = newStr.replace(regex, lookup[key])
  })
  return newStr
}

console.log(convertHTML("Dolce & Gabbana")) // Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos")) // Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve")) // Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"')) // Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Shindler's List")) // Shindler&apos;s List
console.log(convertHTML("<>")) // &lt;&gt;

module.exports = convertHTML
