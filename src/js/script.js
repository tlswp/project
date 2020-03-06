// class Stories {
//   constructor() {
//     this.storiesStore = [];
//     //this.storiesCount = 0;
//   }
//   ooo(selectedStory) {
//     document.querySelector('.story-wr').append(this.storiesStore[selectedStory].story);
//     document.querySelector('.story-wr').classList.remove('close');
//     var progressBars = this.storiesStore[selectedStory].progressBars,
//       progressCount = 0;
//     setInterval(() => {
//       progressCount += 0.5;
//       if (progressCount <= 100) {
//         progressBars[0].style.width = progressCount + '%';
//       }
//     }, 50);
//   }
//   createStory(avatarSrc, storiesSrc) {
//     var progressBars = [],
//       storySelected = 0,
//       progressCount = 0,
//       sec = 0,
//       progressInterval,
//       progressIntervalDelay;
//     var storiesAvatarsWr = document.querySelector('.stories-avatars-wr'),
//       progressBarWr = document.createElement('div'),
//       storyImg = document.createElement('img'),
//       storyAvatarWr = document.createElement('div');
//     var storyWr = document.querySelector('.story-wr');
//     var story = document.createElement('div');
//     for (var storyCount = 0; storyCount < storiesSrc.length; storyCount++) {
//       var progressBar = document.createElement('div'),
//         progress = document.createElement('div');
//       progressBars.push(progress);
//       progressBar.append(progressBars[storyCount]);
//       progressBar.classList.add('progress-bar');
//       progressBars[storyCount].classList.add('progress');
//       progressBarWr.append(progressBar);
//     }
//     storyAvatarWr.classList.add('story-avatar-wr');
//     progressBarWr.classList.add('progress-bar-wr');
//     storyImg.classList.add('story-img');
//     var stopped = true;
//     story.classList.add('story');
//     storyImg.setAttribute('src', storiesSrc[storySelected]);
//     storiesAvatarsWr.append(storyAvatarWr);
//     storyAvatarWr.innerHTML = '<img class="story-avatar" src="' + avatarSrc + '">';
//     story.append(progressBarWr);
//     story.append(storyImg);
//     this.storiesStore.push({ avatarSrc: avatarSrc, storiesSrc: storiesSrc, progressBars: progressBars, story: story });

//     function openStory() {
//       stopped = true;
//       storyWr.append(story);
//       storyWr.classList.remove('close');
//       progressInterval = setInterval(function() {
//         if (stopped) {
//           progressCount += 0.5;
//           if (progressCount <= 100) {
//             //this.progress = document.querySelector('.progress');
//             progressBars[storySelected].style.width = progressCount + '%';
//           }
//           if (progressCount > 100 && storySelected < storiesSrc.length - 1) {
//             storySelected += 1;
//             storyImg.setAttribute('src', storiesSrc[storySelected]);
//             progressCount = 0;
//           }
//           if (progressCount > 100 && storySelected === storiesSrc.length - 1) {
//             closeStory();
//           }
//         }
//       }, 50);
//     };

//     function startSrory() {
//       sec = 0;
//       progressIntervalDelay = setInterval(() => {
//         sec += 0.01;
//       }, 1);
//       stopped = false;
//       event.stopPropagation();
//     }

//     function closeStory() {
//       for (var progressBarsCount = 0; progressBarsCount < progressBars.length; progressBarsCount++) {
//         progressBars[progressBarsCount].style.width = 0 + '%';
//       }
//       document.querySelector('.story-wr').innerHTML = '';
//       document.querySelector('.story-wr').classList.add('close');
//       storySelected = 0;
//       progressCount = 0;
//       stopped = false;
//       clearInterval(progressInterval);
//     }

//     storyAvatarWr.addEventListener('click', function() {
//       openStory();
//       storyWr.addEventListener('mousedown', function() {
//         closeStory();
//       })
//       story.addEventListener('mousedown', function() {
//         startSrory();
//       })
//       story.addEventListener('mouseup', function() {
//         clearInterval(progressIntervalDelay);
//         if (sec > 0.5) {
//           stopped = true;
//           event.stopPropagation();
//         } else {
//           closeStory();
//         }
//       })
//     })
//   }
// }
// var story = new Stories();
// story.createStory('img/avatars/CyberDima.jpg', ['img/BAN.png', 'img/dbaner.png']);
// story.createStory('img/avatars/CyberDima.jpg', ['img/dbaner.png', 'img/BAN.png', 'img/dbaner.png']);

var storiesStore = [],
  storyId = 0;

function storyEvents(Id, st = false) {
  var stopped = true,
    storyWr = storiesStore[Id].storyWr,
    story = storiesStore[Id].story,
    progressInterval,
    progressIntervalDelay,
    progressBars = storiesStore[Id].progressBars,
    progressCount = 0,
    storyImg = storiesStore[Id].storyImg,
    storySelected = 0,
    storiesSrc = storiesStore[Id].storiesSrc,
    sec = 0,
    storyAvatarWr = storiesStore[Id].storyAvatarWr;

  function openStory() {
    stopped = true,
      storyWr = storiesStore[Id].storyWr,
      story = storiesStore[Id].story,
      progressInterval,
      progressIntervalDelay,
      progressBars = storiesStore[Id].progressBars,
      progressCount = 0,
      storyImg = storiesStore[Id].storyImg,
      storySelected = 0,
      storiesSrc = storiesStore[Id].storiesSrc,
      sec = 0,
      storyAvatarWr = storiesStore[Id].storyAvatarWr;
    stopped = true;
    storyWr.append(story);
    storyWr.classList.remove('close');
    progressInterval = setInterval(function() {
      if (stopped) {
        progressCount += 0.5;
        if (progressCount <= 100) {
          //this.progress = document.querySelector('.progress');
          progressBars[storySelected].style.width = progressCount + '%';
        }
        if (progressCount > 100 && storySelected < storiesSrc.length - 1) {
          storySelected += 1;
          storyImg.setAttribute('src', storiesSrc[storySelected]);
          progressCount = 0;
        }
        if (progressCount > 100 && storySelected === storiesSrc.length - 1) {
          closeStory();
          // if (Id < storiesStore.length - 1) {
          //   storyEvents(Id + 1, true);
          // }
        }
      }
    }, 50);
  };

  function startSrory() {
    document.body.classList.add('scroll-lock');
    sec = 0;
    progressIntervalDelay = setInterval(() => {
      sec += 0.01;
    }, 1);
    stopped = false;
    event.stopPropagation();
  }

  function closeStory() {
    for (var progressBarsCount = 0; progressBarsCount < progressBars.length; progressBarsCount++) {
      progressBars[progressBarsCount].style.width = 0 + '%';
    }
    document.querySelector('.story-wr').innerHTML = '';
    document.querySelector('.story-wr').classList.add('close');
    storySelected = 0;
    progressCount = 0;
    stopped = false;
    console.log('id ' + Id + ' st ' + st + ' storySelected ' + storySelected + ' storiesSrc ' + storiesSrc);
    clearInterval(progressInterval);
    clearInterval(progressIntervalDelay);
  }
  storyWr.addEventListener('touchstart', function() {
    closeStory();
  })
  story.addEventListener('touchstart', function() {
    startSrory();
  })
  story.addEventListener('touchend', function() {
    document.body.classList.remove('scroll-lock');
    clearInterval(progressIntervalDelay);
    if (sec > 0.5) {
      stopped = true;
    } else {
      stopped = true;
      //nextStory = true;
      progressCount = 99;
    }
    event.stopPropagation();
  })

  storyAvatarWr.addEventListener('click', function() {
    openStory();
  })
  storyWr.addEventListener('mousedown', function() {
    closeStory();
  })
  story.addEventListener('mousedown', function() {
    startSrory();
  })
  storyWr.addEventListener('mouseup', function() {
      clearInterval(progressIntervalDelay);
      if (sec > 0.5) {
        stopped = true;
      } else {
        stopped = true;
        //nextStory = true;
        progressCount = 99;
      }
      event.stopPropagation();
    })
    // if (st) {
    //   openStory();
    //   // alert(1);
    // }
}

function createStory(avatarSrc, storiesSrc) {
  var progressBars = [],
    storySelected = 0,
    progressCount = 0,
    sec = 0,
    nextStory = false,
    progressInterval,
    progressIntervalDelay,
    storiesAvatarsWr = document.querySelector('.stories-avatars-wr'),
    progressBarWr = document.createElement('div'),
    storyImg = document.createElement('img'),
    storyAvatarWr = document.createElement('div'),
    storyWr = document.querySelector('.story-wr'),
    story = document.createElement('div');
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
  storyImg.setAttribute('draggable', false);
  storiesAvatarsWr.append(storyAvatarWr);
  storyAvatarWr.innerHTML = '<img class="story-avatar" src="' + avatarSrc + '">';
  story.append(progressBarWr);
  story.append(storyImg);

  storiesStore.push({
    progressBars: progressBars,
    storySelected: storySelected,
    progressCount: progressCount,
    sec: sec,
    progressInterval: progressInterval,
    progressIntervalDelay: progressIntervalDelay,
    storiesAvatarsWr: storiesAvatarsWr,
    progressBarWr: progressBarWr,
    storyImg: storyImg,
    storyAvatarWr: storyAvatarWr,
    storyWr: storyWr,
    story: story,
    storiesSrc: storiesSrc,
    avatarSrc: avatarSrc
  })
  storyEvents(storyId);
  storyId += 1;
}

createStory('img/avatars/CyberDima.jpg', ['img/dbaner.png', 'img/cs.jpg', 'img/ds.jpg']);
createStory('img/avatars/186452.jpg', ['img/krossovki.jpg', 'img/186452.jpg', 'img/30.jpg', 'img/dbaner.png']);