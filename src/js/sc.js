'use strict';
var storiesList = [{
  storyAvatar: 'img/avatars/CyberDima.jpg',
  stories: ['img/dbaner.png', 'img/cs.jpg', 'img/ds.jpg']
}, {
  storyAvatar: 'img/avatars/186452.jpg',
  stories: ['img/Krossovki.jpg', 'img/186452.jpg', 'img/30.jpg', 'img/dbaner.png']
}, {
  storyAvatar: 'img/avatars/a3.jpg',
  stories: ['img/nightCity.png', 'img/cyb.jpg']
}];
var stoppedStory = false,
  progressCount = 0,
  storySelected = 0,
  sec,
  prog, storiesAvatarWr, progressInterval, progressIntervalDelay;

function closeStory() {
  stoppedStory = true;
  document.querySelector('.story-wr').innerHTML = '';
  document.querySelector('.story-wr').classList.add('close');
  storySelected = 0;
  progressCount = 0;
  clearInterval(progressInterval);
  clearInterval(progressIntervalDelay);
  document.querySelector('.story-wr').removeEventListener('mousedown', closeStory);
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
  document.querySelector('.story').addEventListener('mousedown', startSrory);
}

function storyView(stories) {
  var progressBars = '';
  for (var storyNum = 0; storyNum < stories.length; storyNum++) {
    if (storyNum < storySelected) {
      progressBars += '<div class="progress-bar"><div class="progress full"></div></div>';
    } else {
      progressBars += '<div class="progress-bar"><div class="progress"></div></div>';
    }
  }
  document.querySelector('.story-wr').innerHTML = '<div class="story">' +
    '<div class="progress-bar-wr">' + progressBars + '</div><img src="' +
    stories[storySelected] + '" draggable="false" class="story-img"></div>';
  document.querySelector('.story-wr').classList.remove('close');
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

function progress() {
  prog = document.querySelectorAll('.progress');
  var progressResponse;
  progressResponse = true;
  progressCount += 0.1;
  prog[storySelected].style.width = progressCount + '%';
  if (progressCount > 100) {
    progressResponse = false;
    progressCount = 0;
    clearInterval(progressInterval);
  }
  return progressResponse;
}

function processingStories(stories, userNum) {
  stoppedStory = false;
  var progressResponse;
  stoppedStory = false;
  storyView(stories);
  document.querySelector('.story-img').onload = function() {
    var story = document.querySelector('.story'),
      storyWr = document.querySelector('.story-wr');
    storyWr.addEventListener('mousedown', closeStory);
    story.addEventListener('mousedown', startSrory);
    storyWr.addEventListener('mouseup', clos);
    progressInterval = setInterval(function() {
      if (!stoppedStory) {
        progressResponse = progress();
        if (!progressResponse) {
          storySelected += 1;
          if (storySelected < stories.length) {
            processingStories(stories, userNum);
          } else {
            closeStory();
            userNum += 1;
            if (userNum < storiesList.length) {
              processingStories(storiesList[userNum].stories, userNum);
            }
          }
        }
      }
    }, 1);
  };
}

function storyPage() {
  document.body.innerHTML =
    '<div class="stories-avatars-wr">' +
    '</div><div class="story-wr close">' +
    '</div>';
  storiesAvatarWr = document.querySelector('.stories-avatars-wr');
  storiesAvatarWr.addEventListener('click', function(event) {
    var story = event.target;
    if (story.tagName === 'IMG') {
      var stories = story.getAttribute('data-stories').split(','),
        userNum = +story.getAttribute('data-user');
      processingStories(stories, userNum);
    }
  });
}

function updateStoriesList(storiesList) {
  var storiesListElem = '';
  for (var userNum = 0; userNum < storiesList.length; userNum++) {
    var avatarLink = storiesList[userNum].storyAvatar,
      stories = storiesList[userNum].stories;
    storiesListElem +=
      '<div class="story-avatar-wr">' +
      '<img class="story-avatar" draggable="false" data-user="' +
      userNum + '" data-stories="' +
      stories.toString() + '" src="' + avatarLink + '"></div>';
  }
  storiesAvatarWr.innerHTML = storiesListElem;
}
storyPage();
updateStoriesList(storiesList);