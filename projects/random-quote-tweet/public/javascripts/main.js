
// DOM
var new_quote = document.getElementById('get-quote')
var quote_body = document.getElementById('quote-body')
var quote_author = document.getElementById('quote-author')
var tweet = document.getElementById('twitter-share-button')

// AJAX
new_quote.addEventListener('click', function(e) {
  e.preventDefault()

  var request = $.ajax({
    url: `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=`,
    cache: false
  })

  request.success(function(data) {
    var quote = data.shift()
    var content = quote.content
    var title = quote.title

    var trimmed_quote = content
          .slice(3, content.length - 5)
          .trim()
          //.split(' ')
          //.join('%20')

    quote_body.innerHTML = content
    quote_author.innerHTML = title

    console.log(trimmed_quote)
    tweet.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + trimmed_quote)
  })

})

