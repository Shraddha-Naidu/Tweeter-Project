$document.ready(function () {

  const createTweetElement = function(tweetData) {
    const $tweet = $('<article>').addClass('tweet');
    const daysAgo = timeago.format(tweetData["created_at"]);

    const innerHTML = `
      <header>
        <img src= ${tweetData.user.avatars}>
        <span>${tweetData.user.name}</span>
        <span class="handle">${tweetData.user.handle}</span>
      </header>
      <span>${tweetData.content.text}</span>
      <footer>
        <span>${daysAgo} days ago</span>
        <span>
        <i class="fa-solid fa-circle-star"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-flag"></i>
        </span>
      </footer>
    `;

    return $tweet.append(innerHTML);
  };

  const renderTweets = function(beginningOfTimeTweets) {
    for (const tweet of beginningOfTimeTweets) {
      $('section.all-tweets').prepend(createTweetElement(tweet))
      }
    };

    const loadTweets = function () {
      $.ajax('/tweets', {
        method: 'GET',
        dataType: 'JSON'
      })
        .then(function (tweets) {
          renderTweets(tweets)
        });
    };

    loadTweets();


   $('.new-tweet form').submit(function (event) {
    event.preventDefault();
    const newTweetString = $(this).children("textarea").val();

    if(!newTweetString) {
      alert(`Tweet must contain at least one character! Please try again!`)
    } else if (newTweetString.length > 140) {
      alert(`Uh Oh 🙃 Too many characters, please shorten!`)
    } else {
      $.ajax('/tweets', { data: $(this).serialize(), method: 'POST' })
      .then (function (newestTweet) {
        return $.ajax('/tweets', { method: 'GET' })
      })
      .then (function (allTweets) {
        renderTweets([allTweets[allTweets.length - 1]]);
      })
    }
  });

});

