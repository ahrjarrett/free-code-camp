// constants
var request = $.ajax({
  url: 'test',
  dataType: 'json'
})

// DOM
var new_quote = document.getElementById('get-quote')
var quote_body = document.getElementById('quote-body')
var quote_author = document.getElementById('quote-author')

new_quote.addEventListener('click', function(e) {
  e.preventDefault()
})

// Ajax
request.done(function(quotes) {
  var quote = quotes
  console.log(quotes)
  return quotes
})

request.fail(function(e) {
  alert('Error! ' + e)
})

console.log(new_quote)
