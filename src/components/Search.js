import Component from '../core/Component';
import movieStore, { searchMovies } from '../store/movie';

export default class Search extends Component {
  constructor() {
    super({
      tagName: 'form',
    });
  }
  render() {
    const formEl = this.el;
    this.el.classList.add('search');
    this.el.innerHTML = `
      <input 
      value="${movieStore.state.searchText}" 
      placeholder="Enter the movie title here!!"/>
      <button class="btn btn-primary">Search!</button>
    `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value;
    });
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      searchMovies(1);
    });

  }
}