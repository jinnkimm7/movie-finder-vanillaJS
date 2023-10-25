import Component from '../core/Component';

export default class Home extends Component {
  render() {
    this.el.innerHTML = `
      <h1>home</h1>
    `
  }
}