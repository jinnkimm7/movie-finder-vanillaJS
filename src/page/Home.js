import Header from '../components/Header';
import Component from '../core/Component';

export default class Home extends Component {
  render() {
    const header = new Header().el;

    this.el.classList.add('container');
    this.el.append(
      header,
    )
  }
}