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

  //FUNCTIONS

  const escape =  function(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function(tweetData) {

    const innerHTMLContent = `
    <article>
      <header>
        <img src= ${escape(tweetData.user.avatars)}>
        <span>${escape(tweetData.user.name)}</span>
        <span class="handle">${escape(tweetData.user.handle)}</span>
      </header>
      <span>${escape(tweetData.content.text)}</span>
      <footer>
        <span>${timeago.format(escape(tweetData.created_at))} days ago</span>
        <span>
        <i class="fa-solid fa-circle-star"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-flag"></i>
        </span>
      </footer>
    </article>
    `;
  
    return innerHTMLContent;
  };
  
  //Adds all Tweets
  const renderTweets = function(beginningOfTimeTweets) {
    for (const tweet of beginningOfTimeTweets) {
      $('section.all-tweets').prepend(createTweetElement(tweet))
    }
  };
  
  const loadTweets = function () {
    $.get("/tweets/")
      .then((data) => {
        console.log(data);
        renderTweets(data);
      });
  };
/*JQuery*/

$(document).ready(function () {

  renderTweets(data);

//loadTweets();
/* 
$('.new-tweet form').submit(function (event) {
    event.preventDefault();
    
    const newTweetString = $(this).children("textarea").val();

    if(!newTweetString) {
      alert(`Tweet must contain at least one character! Please try again!`)
    
    } else if (newTweetString.length > 140) {
      alert(`Uh Oh 🙃 Too many characters, please shorten!`)
   
    } else {
      $.post("/tweets/", $(this).serialize())
        .then(() => {
          $.get("/tweets/")
            .then((data) => {
              console.log(data);
              renderTweets(data.slice(-1));
      })
  }

}); */
});