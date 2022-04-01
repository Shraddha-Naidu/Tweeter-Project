$document.ready(function () {

const createTweetElement = function(tweetData) {
let $tweet = $('<article>').addClass('tweet');

const $header = $('<header>');

const $img = $('<img>').attr({
  src: tweetData.user.avatars,
  alt: `${tweetData.user.handle}-avatar`
});

$header.append($img);
    $header.append($('<article>').text(tweetData.user.name));
    $header.append($('<article>').text(tweetData.user.handle));

    $tweet.append($header);
  }
});

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  $("#new-section").empty();
    tweets.forEach(function(tweet) {
      $('#new-section').append(createTweetElement(tweet));
   });
  }

renderTweets(data);

//TEST DATA

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

