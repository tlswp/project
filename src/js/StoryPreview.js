//'use strict';
class StoryPreview extends HTMLElement {
  constructor() {
    super();
  }
  render() {
    this.innerHTML =
      `<img class="story-avatar" draggable="false" src="${this.getAttribute('src')}">`;
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ['src', 'data-stories', 'data-user'];
  }

  attributeChangedCallback() {
    this.render();
  }
}
window.customElements.define('story-preview', StoryPreview);
