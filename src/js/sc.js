var StoriesList = [{
  storyAvatar: 'img/avatars/CyberDima.jpg',
  stories: ['img/dbaner.png', 'img/cs.jpg', 'img/ds.jpg']
}, {
  storyAvatar: 'img/avatars/186452.jpg',
  stories: ['img/Krossovki.jpg', 'img/186452.jpg', 'img/30.jpg', 'img/dbaner.png']
}, {
  storyAvatar: 'img/avatars/a3.jpg',
  stories: ['img/nightCity.png', 'img/cyb.jpg']
}]
var stoppedStory = false,
  progressCount = 0,
  storySelected = 0,
  sec,
  closedStory = false,
  prog;

function closeStory() {
  stoppedStory = true;
  document.querySelector('.story-wr').innerHTML = '';
  document.querySelector('.story-wr').classList.add('close');
  storySelected = 0;
  progressCount = 0;
  clearInterval(progressInterval);
  clearInterval(progressIntervalDelay);
}

function startSrory() {
  //document.body.classList.add('scroll-lock');
  sec = 0;
  progressIntervalDelay = setInterval(() => {
    sec += 0.01;
  }, 1);
  stoppedStory = true;
  event.stopPropagation();
}

function progress(stories, userNum) {
  stoppedStory = false;
  prog = document.querySelectorAll('.progress');
  progressInterval = setInterval(function() {
    if (stoppedStory) {

    }
    if (!stoppedStory) {
      progressCount += 0.1;
      prog[storySelected].style.width = progressCount + '%';
      if (progressCount > 100) {
        progressCount = 0;
        clearInterval(progressInterval);
        storySelected += 1;
        if (storySelected < stories.length) {
          StoryView(stories, userNum);
        } else {
          closeStory();
          userNum += 1;
          if (userNum < StoriesList.length) {
            StoryView(StoriesList[userNum].stories, userNum);
          }
        }
      }
    }
  }, 1)
  story = document.querySelector('.story');
  storyWr = document.querySelector('.story-wr');
  storyWr.addEventListener('mousedown', function() {
    closeStory();
  })
  story.addEventListener('mousedown', function() {
    startSrory();
  })
  storyWr.addEventListener('mouseup', function() {
    clearInterval(progressIntervalDelay);
    if (sec > 0.5) {
      stoppedStory = false;
    } else {
      stoppedStory = false;
      //nextStory = true;
      progressCount = 100;
    }
    event.stopPropagation();
  })
}

function updateStoriesList(StoriesList) {
  var storiesAvatarWr = document.querySelector('.stories-avatars-wr'),
    storiesListElem = '';
  for (var userNum = 0; userNum < StoriesList.length; userNum++) {
    var avatarLink = StoriesList[userNum].storyAvatar,
      stories = StoriesList[userNum].stories;
    storiesListElem += '<div class="story-avatar-wr"><img class="story-avatar" draggable="false" data-user="' + userNum + '" data-stories="' +
      stories.toString() + '" src="' + avatarLink + '"></div>';
  }
  storiesAvatarWr.innerHTML = storiesListElem;
  storiesAvatarWr.tagName;
  storiesAvatarWr.addEventListener('click', function(event) {
    var story = event.target;
    if (story.tagName === 'IMG') {
      StoryView(story.getAttribute('data-stories').split(','), +story.getAttribute('data-user'));
    }
  })
}

function StoryView(stories, userNum) {
  var progressBars = '';
  for (var storyNum = 0; storyNum < stories.length; storyNum++) {
    if (storyNum < storySelected) {
      progressBars += '<div class="progress-bar"><div class="progress full"></div></div>';
    } else {
      progressBars += '<div class="progress-bar"><div class="progress"></div></div>';
    }
  }
  document.querySelector('.story-wr').innerHTML = '<div class="story"><div class="progress-bar-wr">' + progressBars + '</div><img src="' +
    stories[storySelected] + '" draggable="false" class="story-img"></div>';
  document.querySelector('.story-wr').classList.remove('close');
  var img = document.querySelector('.story-img');
  img.onload = function() {
    progress(stories, userNum);
  }
}
updateStoriesList(StoriesList);