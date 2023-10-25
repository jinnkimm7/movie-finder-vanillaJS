export default class Component {
  constructor({
    tagName = 'div',
    state = {},
    props = {},
  } = {}) {
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;

    this.render();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {

  }
}