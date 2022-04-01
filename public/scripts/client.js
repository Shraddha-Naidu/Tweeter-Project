const renderTweets = function(tweets) {

  for (const tweet of tweets) {
    $("tweets-container").append(createTweetElement(tweet))
    }
  };

$document.ready(function () {

  $('.new-tweet form').submit(function(event) {
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
  
  })

const createTweetElement = function(tweetData) {
let $tweet = $('<article>').addClass('tweet');

const $header = $('<header>');

const $img = $('<img>').attr({
  src: tweetData.user.avatars,
  alt: `${tweetData.user.handle}-avatar`
});

$header.append($img);
    $header.append($('<section>').text(tweetData.user.name));
    $header.append($('<section>').text(tweetData.user.handle));

    $tweet.append($header);
  }
});




renderTweets(data);