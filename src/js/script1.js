class Stories {
  constructor(avatarLink, StoriesLinks) {
    this.avatarLink = avatarLink;
    this.StoriesLinks = StoriesLinks;
    this.createStoriesAvatar();
    //this.createStory();
    this.elementAvatar.addEventListener('click', this.showStory.bind(this));
    var storyWr = document.querySelector('.story-wr');
    storyWr.addEventListener('click', function(event) {
      if (event.target.classList = 'story-wr') {
        storyWr.classList.add('close');
        storyWr.innerHTML = '';
      }
    });
  }
  createStory() {
    var storyWr = document.querySelector('.story-wr');
    var story = document.createElement('div');
    story.classList.add('story');
    storyWr.append(this.story);
    story.innerHTML = '<div class="progress-bar"><div class="progress"></div></div><img class="story-img" src="' + this.StoriesLinks + '">';
    this.story = story;
  }
  showStory() {
    var storyWr = document.querySelector('.story-wr');
    var story = document.createElement('div');
    story.classList.add('story');
    storyWr.append(this.story);
    story.innerHTML = '<div class="progress-bar"><div class="progress"></div></div><img class="story-img" src="' + this.StoriesLinks + '">';
    this.story = story;
    storyWr.classList.remove('close');
    window.i = 0;
    var stopped = true;
    if (stopped === true) {
      var deley = 50;

      function progressBar() {
        if (i < 100 && stopped === true) {
          i += 0.5;
          this.progress = document.querySelector('.progress');
          this.progress.style.width = i + '%';
        }
      }
      setInterval(progressBar, deley);
      // this.progressBar = setTimeout(function tick() {
      //   console.log(stopped)
      //   if (i < 100 && stopped === true) {
      //     i += 0.5;
      //     this.progress = document.querySelector('.progress');
      //     this.progress.style.width = i + '%';
      //   }
      //   this.progressBar = setTimeout(tick, deley);
      // }, deley);
    }
    this.story.addEventListener('mousedown', function() {
      console.log('0');
      stopped = false;
      event.stopPropagation();
    });
    this.story.addEventListener('mouseup', function() {
      console.log('1');
      stopped = true;
      event.stopPropagation();
    });
    // storyWr.addEventListener('click', function(event) {
    //   if (event.target.classList = 'story-wr') {
    //     storyWr.classList.add('close');
    //   }
    // });
  }
  createStoriesAvatar() {
    var storiesAvatarsWr = document.querySelector('.stories-avatars-wr'),
      storyAvatarWr = document.createElement('div');
    storyAvatarWr.classList.add('story-avatar-wr');
    storiesAvatarsWr.append(storyAvatarWr);
    storyAvatarWr.innerHTML = '<img class="story-avatar" src="' + this.avatarLink + '">';
    this.elementAvatar = storyAvatarWr;
  }
}
var story = new Stories('img/CyberDima.jpg', 'img/BAN.png');
var story2 = new Stories('img/CyberDima.jpg', 'img/CyberDima.jpg');

// function showStory() {
//   var storyWr = document.querySelector('.story-wr'),
//     storyAvatarWr = document.createElement('div');
//   storyAvatarWr.classList.add('story');
//   storyWr.classList.remove('close');
//   storyWr.append(storyAvatarWr);
//   storyAvatarWr.innerHTML = '<img class="story-img" src="' + 'img/CyberDima.jpg' + '">';
// }
// var storyWr = document.querySelector('.story-wr');
// storyWr.addEventListener('click', function(event) {
//   if (event.target.classList = 'story-wr') {
//     storyWr.classList.add('close');
//   }
// });

// var progressBar = setTimeout(function tick() {
//   if (i < 100) {
//     i += 1;
//     var progress = document.querySelector('.progress');
//     progress.style.width = i + '%';
//     progressBar = setTimeout(tick, 100);
//   }
// }, 100);


window.onload = function() {

}