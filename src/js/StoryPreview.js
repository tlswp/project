//'use strict';
class StoryPreview extends HTMLElement {
  constructor() {
    super();
  }
  render() {
    this.innerHTML = '<img class="story-avatar" draggable="false" src="' +
      this.getAttribute('src') + '">';
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ['src', 'data-stories', 'data-user'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    name = name;
    oldValue = oldValue;
    newValue = newValue;
    this.render();
  }
}
customElements.define('story-preview', StoryPreview);