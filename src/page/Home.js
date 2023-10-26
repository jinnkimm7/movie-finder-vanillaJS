import Header from '../components/Header';
import Search from '../components/Search';
import Component from '../core/Component';

export default class Home extends Component {
  render() {
    const header = new Header().el;
    const search = new Search().el;

    this.el.classList.add('container');
    this.el.append(
      header,
      search,
    )
  }
}