class Progress extends HTMLElement {
  render() {
    var progress = '';
    for (var progressNum = 0; progressNum < +this.getAttribute('quantity'); progressNum++) {
      if (progressNum < +this.getAttribute('story-selected')) {
        progress += '<div class="progress-bar"><div class="progress full"></div></div>';
      }
      if (progressNum === +this.getAttribute('story-selected')) {
        progress +=
          `<div class="progress-bar">
            <div style="width:${this.getAttribute('fullness')}%" class="progress"></div>
          </div>`;
      }
      if (progressNum > +this.getAttribute('story-selected')) {
        progress += '<div class="progress-bar"><div class="progress"></div></div>';
      }
    }
    this.innerHTML =
      `<div class="progress-bar-wr">${progress}</div>`;
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ['quantity', 'story-selected', 'fullness'];
  }

  attributeChangedCallback() {
    this.render();
  }
}
window.customElements.define('progress-bar', Progress);