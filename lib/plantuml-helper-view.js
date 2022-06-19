'use babel';

export default class PlantumlHelperView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('plantuml-helper');

    // Create message element
    this.messageBox = document.createElement('div');
    this.messageBox.textContent = 'The PlantumlHelper package is Alive! It\'s ALIVE!';
    this.messageBox.classList.add('message');
    this.element.appendChild(this.messageBox);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

  updateWithMessage(message) {
    this.messageBox.textContent = message

  }

}
