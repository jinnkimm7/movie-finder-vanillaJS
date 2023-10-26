import Component from '../core/Component';

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
      <input placeholder="Enter the movie title here!!"/>
      <button class="btn btn-primary">Search!</button>
    `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      console.log(inputEl.value);
    });
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(inputEl.value);
    });

  }
}