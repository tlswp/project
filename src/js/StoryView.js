class StoryView extends HTMLElement {
  render() {
    this.innerHTML =
      `<div class="story">
        <progress-bar fullness="${this.getAttribute('fullness')}"
        quantity="${this.getAttribute('quantity')}" 
        story-selected="${this.getAttribute('story-selected')}">
        </progress-bar>
        <img src="${this.getAttribute('src')}" draggable="false" class="story-img">
      </div>`;
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ['quantity', 'story-selected', 'src', 'fullness'];
  }

  attributeChangedCallback() {
    this.render();
  }
}
window.customElements.define('story-view', StoryView);