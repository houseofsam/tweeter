/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Walter White",
      "avatars": "<i class=\"fas fa-user-secret fa-2x\"></i>"
      ,
      "handle": "@Heisenberg"
    },
    "content": {
      "text": "I am the one who knocks"
    },
    "created_at": Date.now()
  },
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
];

$(document).ready(function() {

  // Checks whether the avatars property contains an http link or an svg class from one of the project libraries
  const avatarType = function(avatar) {
    const regex = new RegExp("^http");

    if (regex.test(avatar)) {
      return `<img src=${avatar}/>`;
    } else {
      return avatar;
    }
  };

  const createTweetElement = function(obj) {
    const $tweet = `
      <article class = "tweet-container">
          <header>
            ${obj.user.avatars ? avatarType(obj.user.avatars) : '<i class="fas fa-user-secret fa-2x"></i>'}
            <div class="username">
              ${obj.user.name}
            </div>
            <div class="user-id">
              ${obj.user.handle}
            </div>
          </header>

          <div class="tweet-content">
            ${obj.content.text}
          </div>

          <footer>
            <div class="date-posted">
              ${timeago.format(obj.created_at)}
            </div>

            <div class="tweet-actions">
              <a href="#"><i class="fas fa-flag"></i></a>
              <a href="#"><i class="fas fa-retweet"></i></a>
              <a href="#"><i class="fas fa-heart"></i></a>
            </div>
          </footer>
        </article>
    `;
    return $tweet;
  };

  const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweetObj of tweets) {
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      const $tweet = createTweetElement(tweetObj);
      $('#tweets-container').append($tweet);
    }
  };

  renderTweets(data);
  
});