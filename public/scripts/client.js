  //FUNCTIONS

  const escape =  function(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function(tweetData) {

    let $newTweet = $(`
    <article class="newTweet">
      <header>
        <img src= ${escape(tweetData.user.avatars)}>
        <span class="name">${escape(tweetData.user.name)}</span>
        <span class="handle">${escape(tweetData.user.handle)}</span>
      </header>
      <span class="tweet_text">${escape(tweetData.content.text)}</span>
      <footer>
        <span class="date_stamp">${timeago.format(escape(tweetData.created_at))}</span>
        <span>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-flag"></i>
        </span>
      </footer>
    </article>
    `);

    return $newTweet;
  };

  //Adds all Tweets
  const renderTweets = function(beginningOfTimeTweets) {
    for (const tweet of beginningOfTimeTweets) {
      $('section.all-tweets').prepend(createTweetElement(tweet))
    }
  };

  const loadTweets = function () {
    $.ajax({
      url: "/tweets/",
      type: "GET"
    }).then(function(data){
        console.log(data);
        $(".all-tweets").empty()//clears input
        renderTweets(data);
      });
  };
/*JQuery*/
//DOM ready

$(document).ready(function () {

//Loads tweets from db
loadTweets();

// New submitted tweet
$(".new-tweet-form").submit(function (event) {
    event.preventDefault();//prevents default submission behaviour

    if(!$(".input-tweet").val()) {
      $(".error-message").html("Invalid! Please try again!").fadeIn(200).fadeOut(3500);
    } else if ($(".input-tweet").val().length > 140) {
      $(".error-message").html(`Uh Oh 🙃 Too many characters, please shorten!`).fadeIn(200).fadeOut(3500);
    } else {
      $.ajax({
        url:"/tweets/",
        type: "POST",
        data: $(".input-tweet").serialize()
      }).then(() => {
          loadTweets();
          $(".input-tweet").val("")
          $("#char-count").text(140);
        })

    };
  })
});
