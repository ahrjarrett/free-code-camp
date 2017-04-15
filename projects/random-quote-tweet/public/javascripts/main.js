'use strict'

// DOM
var new_quote = document.getElementById('get-quote')
var quote_body = document.getElementById('quote-body')
var quote_author = document.getElementById('quote-author')
var tweet = document.getElementById('twitter-share-button')
var tweet_warning = document.getElementById('tweet-warning')

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
    var author = quote.title
    // Have to do this hacky trimming b/c response comes back within p tags and appends a \n character
    var trimmed_quote = content
          .slice(3, content.length - 5)
          .trim()

    quote_body.innerHTML = content
    quote_author.innerHTML = author
    tweet.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(trimmed_quote + ' —' + author))
  })
})
