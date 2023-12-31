import Header from '../components/Header';
import MovieList from '../components/MovieList';
import MovieListMore from '../components/MovieListMore';
import Search from '../components/Search';
import Component from '../core/Component';

export default class Home extends Component {
  render() {
    const header = new Header().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const movieListMore = new MovieListMore().el;

    this.el.classList.add('container');
    this.el.append(
      header,
      search,
      movieList,
      movieListMore,
    )
  }
}