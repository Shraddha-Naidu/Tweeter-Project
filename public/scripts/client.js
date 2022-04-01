const renderTweets = function(tweets) {

  for (const tweet of tweets) {
    $("tweets-container").append(createTweetElement(tweet))
    }
  };

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


   $('.new-tweet form').submit(function (event) {
    event.preventDefault();

    $.ajax('/tweets', {
      data: $(this).serialize(),
      method: 'POST'
    });

    const loadTweets = () => {
      $.ajax('/tweets', {
        method: 'GET',
        dataType: 'JSON'
      })
        .then(tweets => renderTweets(tweets));
    };
  
    loadTweets();
  
  });

});



//renderTweets(data);