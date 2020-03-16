'use strict';

function addStory(userNum, stories) {
  storiesList[userNum].stories = storiesList[userNum].stories.concat(stories);
  updateStoriesList(storiesList);
}
//addStory(1, ['img/dbaner.png', 'img/cs.jpg', 'img/ds.jpg']);