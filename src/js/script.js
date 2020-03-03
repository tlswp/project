class Stories {
  constructor() {
    this.storiesStore = [];
    //this.storiesCount = 0;
  }
  createStory(avatarSrc, storiesSrc) {
    this.storiesStore.push({ avatarSrc: avatarSrc, storiesSrc: storiesSrc });
    var progressBars = [],
      storySelected = 0,
      progressCount = 0,
      sec = 0,
      progressInterval,
      progressIntervalDelay;
    var storiesAvatarsWr = document.querySelector('.stories-avatars-wr'),
      progressBarWr = document.createElement('div'),
      storyImg = document.createElement('img'),
      storyAvatarWr = document.createElement('div');
    var storyWr = document.querySelector('.story-wr');
    var story = document.createElement('div');
    for (var storyCount = 0; storyCount < storiesSrc.length; storyCount++) {
      var progressBar = document.createElement('div'),
        progress = document.createElement('div');
      progressBars.push(progress);
      progressBar.append(progressBars[storyCount]);
      progressBar.classList.add('progress-bar');
      progressBars[storyCount].classList.add('progress');
      progressBarWr.append(progressBar);
    }
    storyAvatarWr.classList.add('story-avatar-wr');
    progressBarWr.classList.add('progress-bar-wr');
    storyImg.classList.add('story-img');
    var stopped = true;
    story.classList.add('story');
    storyImg.setAttribute('src', storiesSrc[storySelected]);
    storiesAvatarsWr.append(storyAvatarWr);
    storyAvatarWr.innerHTML = '<img class="story-avatar" src="' + avatarSrc + '">';
    storyAvatarWr.addEventListener('click', function() {
      stopped = true;
      storyWr.append(story);
      story.append(progressBarWr);
      story.append(storyImg);
      storyWr.classList.remove('close');

      function closeStory() {
        for (var progressBarsCount = 0; progressBarsCount < progressBars.length; progressBarsCount++) {
          progressBars[progressBarsCount].style.width = 0 + '%';
        }
        document.querySelector('.story-wr').innerHTML = '';
        document.querySelector('.story-wr').classList.add('close');
        storySelected = 0;
        progressCount = 0;
        stopped = false;
        clearInterval(progressInterval);
      }
      storyWr.addEventListener('mousedown', function() {
        closeStory();
      })
      story.addEventListener('mousedown', function() {
        sec = 0;
        console.log(progressBars.length);
        progressIntervalDelay = setInterval(() => {
          sec += 0.01;
        }, 1);
        stopped = false;
        event.stopPropagation();
      })
      story.addEventListener('mouseup', function() {
        clearInterval(progressIntervalDelay);
        if (sec > 0.5) {
          stopped = true;
          event.stopPropagation();
        } else {
          closeStory();
        }
      })
      progressInterval = setInterval(function() {
        if (stopped) {
          progressCount += 0.5;
          if (progressCount <= 100) {
            //this.progress = document.querySelector('.progress');
            progressBars[storySelected].style.width = progressCount + '%';
          }
          if (progressCount === 100 && storySelected < storiesSrc.length - 1) {
            storySelected += 1;
            storyImg.setAttribute('src', storiesSrc[storySelected]);
            progressCount = 0;
          }
          if (progressCount === 100 && storySelected === storiesSrc.length - 1) {
            closeStory();
          }
        }
      }, 50);
    })
  }
}
var story = new Stories();
story.createStory('img/avatars/CyberDima.jpg', ['img/BAN.png', 'img/dbaner.png']);
story.createStory('img/avatars/CyberDima.jpg', ['img/dbaner.png', 'img/BAN.png', 'img/dbaner.png']);