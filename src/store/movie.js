import Store from '../core/Store';

const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
});

export default store;

export const searchMovies = async page => {
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
  }
  const API_KEY = '7035c60c';
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${store.state.searchText}&page=${store.state.page}`);
  const { Search } = await res.json();
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ];
}