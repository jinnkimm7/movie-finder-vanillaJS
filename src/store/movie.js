import Store from '../core/Store';

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  message: 'Search for the movie title!'
});

export default store;

const API_KEY = '7035c60c';

export const searchMovies = async page => {
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
    store.state.message = '';
  }
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${store.state.searchText}&page=${store.state.page}`);
    const { Search, totalResults, Response, Error } = await res.json();
    if (Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
      store.state.pageMax = 1
    }
  } catch (error) {
    console.log('searchMovies error:', error);
  }
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`);
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error:', error);
  }
}