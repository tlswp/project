'use strict';
document.body.innerHTML =
  '<div class="stories-avatars-wr"></div>' +
  '<div class="story-wr close"></div>';
var storiesAvatarsWr = document.querySelector('.stories-avatars-wr'),
  storyWr = document.querySelector('.story-wr');
var storiesList = [
  {
    storyAvatar: './img/CyberDima.jpg',
    stories: ['./img/30.jpg', './img/nightCity.png'],
  },
  {
    storyAvatar: './img/computer.png',
    stories: [
      './img/bot.jpg',
    ],
  },
  {
    storyAvatar: './img/a.jpg',
    stories: ['./img/park.jpg', './img/park2.jpg', './img/park3.jpg'],
  },
];

function render(storiesList) {
  var storiesListElem = '';
  for (var userNum = 0; userNum < storiesList.length; userNum++) {
    var avatarLink = storiesList[userNum].storyAvatar,
      stories = storiesList[userNum].stories;
    storiesListElem +=
      '<story-preview class="story-avatar-wr" data-user="' +
      userNum +
      '" data-stories="' +
      [stories] +
      '" src="' +
      avatarLink +
      '"></story-preview>';
  }
  storiesAvatarsWr.innerHTML = storiesListElem;
}
render(storiesList);
var stoppedStory;

function storyView(stories, storySelected) {
  storyWr.classList.remove('close');
  storyWr.innerHTML =
    '<story-view src="' +
    stories[storySelected] +
    '" fullness="' +
    0 +
    '" story-selected="' +
    storySelected +
    '" quantity="' +
    stories.length +
    '" stories ></story-view>';
}

function processingStories(stories, userNum) {
  var sec, progressIntervalDelay, progressInterval;
  stoppedStory = false;
  var storySelected = 0;
  var progressCount = 0;

  function closeStory() {
    stoppedStory = true;
    document.querySelector('.story-wr').innerHTML = '';
    document.querySelector('.story-wr').classList.add('close');
    storySelected = 0;
    progressCount = 0;
    clearInterval(progressInterval);
    document
      .querySelector('.story-wr')
      .removeEventListener('mousedown', closeStory);
  }

  function startSrory() {
    if (event.button === 0) {
      sec = 0;
      progressIntervalDelay = setInterval(() => {
        sec += 0.01;
      }, 1);
      stoppedStory = true;
      event.stopPropagation();
    }
  }

  function clos() {
    if (event.button === 0) {
      clearInterval(progressIntervalDelay);
      if (sec > 0.5) {
        stoppedStory = false;
      } else {
        stoppedStory = false;
        progressCount = 100;
      }
      event.stopPropagation();
    }
    document.querySelector('.story').removeEventListener('mouseup', clos);
  }
  storyView(stories, storySelected);
  document.querySelector('.story-img').onload = function () {
    progressInterval = setInterval(function () {
      var story = document.querySelector('.story'),
        storyWr = document.querySelector('.story-wr');
      storyWr.addEventListener('mousedown', closeStory);
      story.addEventListener('mousedown', startSrory);
      storyWr.addEventListener('mouseup', clos);
      if (stories.length === storySelected) {
        closeStory();
        userNum += 1;
        if (userNum < storiesList.length) {
          processingStories(storiesList[userNum].stories, userNum);
        }
        return;
      }
      if (!stoppedStory) {
        progressCount += 0.1;
        document
          .querySelector('progress-bar')
          .setAttribute('fullness', progressCount);
        if (progressCount > 100) {
          progressCount = 0;
          storySelected += 1;
          if (storySelected < stories.length) {
            storyView(stories, storySelected);
          }
        }
      }
    }, 1);
  };
}
storiesAvatarsWr.addEventListener('click', function (event) {
  var story = event.target.closest('story-preview');
  if (!story) return;
  var stories = story.getAttribute('data-stories').split(','),
    userNum = +story.getAttribute('data-user');
  processingStories(stories, userNum);
});
