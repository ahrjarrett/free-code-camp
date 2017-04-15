
// DOM
var new_quote = document.getElementById('get-quote')
var quote_body = document.getElementById('quote-body')
var quote_author = document.getElementById('quote-author')

// AJAX
new_quote.addEventListener('click', function(e) {
  e.preventDefault()

  var request = $.ajax({
    url: `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=`,
    cache: false
  })
  request.success(function(data) {
    var quote = data.shift()
    quote_body.innerHTML = quote.content
    quote_author.innerHTML = quote.title
  })

})

