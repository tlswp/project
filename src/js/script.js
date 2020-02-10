class Stories {
  constructor(avatarLink, StoriesLinks) {
    this.avatarLink = avatarLink;
    this.StoriesLinks = StoriesLinks;
    this.createStoriesAvatar();
    this.elementAvatar.addEventListener('click', this.showStory.bind(this));
    var storyWr = document.querySelector('.story-wr');
    storyWr.addEventListener('click', function(event) {
      if (event.target.classList = 'story-wr') {
        storyWr.classList.add('close');
        storyWr.innerHTML = '';
      }
    });
  }
  showStory() {
    var storyWr = document.querySelector('.story-wr'),
      story = document.createElement('div');
    story.classList.add('story');
    storyWr.classList.remove('close');
    storyWr.append(story);
    story.innerHTML = '<div class="progress-bar"><div class="progress"></div></div><img class="story-img" src="' + this.StoriesLinks + '">';
    this.story = story;
    window.i = 0;
    var stoped = true;
    if (stoped === true) {
      var deley = 50;
      this.progressBar = setTimeout(function tick() {
        console.log(stoped)
        if (i < 100 && stoped === true) {
          i += 0.5;
          this.progress = document.querySelector('.progress');
          this.progress.style.width = i + '%';
        }
        this.progressBar = setTimeout(tick, deley);
      }, deley);
    }
    this.story.addEventListener('click', function() {
      stoped = !stoped;
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