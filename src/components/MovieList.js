import Component from '../core/Component';
import movieStore from '../store/movie';
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
      this.render();
    })
    movieStore.subscribe('message', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list');
    this.el.innerHTML = `
      ${movieStore.state.message
        ? `<div class="message">${movieStore.state.message}</div>`
        : '<div class="movies"></div>'}
    `;

    const moviesEl = this.el.querySelector('.movies');
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => {
        return new MovieItem({
          movie: movie
        }).el;
      })
    )
  }
}