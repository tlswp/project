'use strict';

function addUser(storyAvatar, stories) {
  storiesList.push({
    storyAvatar: storyAvatar,
    stories: stories
  });
  updateStoriesList(storiesList);
}
//addUser('img/avatars/CyberDima.jpg', ['img/dbaner.png', 'img/cs.jpg', 'img/ds.jpg']);