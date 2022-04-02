/*JQuery*/

$document.ready(function () {
  //$("time.timeago").timeago();

  //FUNCTIONS

const escape =  function(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function(tweetData) {
  const $tweet = $('<article>').addClass('tweet');
  const daysAgo = $.timeago.format(tweetData["created_at"]);

  const innerHTMLContent = `
    <header>
      <img src= ${escape(tweetData.user.avatars)}>
      <span>${escape(tweetData.user.name)}</span>
      <span class="handle">${escape(tweetData.user.handle)}</span>
    </header>
    <span>${escape(tweetData.content.text)}</span>
    <footer>
      <span>${daysAgo} days ago</span>
      <span>
      <i class="fa-solid fa-circle-star"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-flag"></i>
      </span>
    </footer>
  `;

  return $tweet.html(innerHTMLContent);
};

//Adds all Tweets
const renderTweets = function(beginningOfTimeTweets) {
  for (const tweet of beginningOfTimeTweets) {
    $('section.all-tweets').prepend(createTweetElement(tweet))
  }
};

const loadTweets = function () {
  $.ajax('/tweets', {
    method: 'GET',
    dataType: 'JSON',
    success: tweets => renderTweets(tweets),
    error: (data, text, error) => console.error(error)
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
      $.ajax('/tweets', {
        data: $(this).serialize(),
        method: 'POST',
        success: () => {
          loadTweets();
          $textArea.val(''); // clear input
          $('.counter').text('140'); // reset counter
      }
    })
  }
});