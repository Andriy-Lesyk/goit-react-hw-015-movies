import { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=a4a29fffc470fecd93a30cf31010c680`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`По Вашому запиту нічого не знайдено!`)
        );
      })
      .then(response => {
        setMovies(prevState => ({ ...prevState, ...response.results }));
      });
  }, []);
  const consol = () => console.log(movies);
  consol();

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PopularMovies;
