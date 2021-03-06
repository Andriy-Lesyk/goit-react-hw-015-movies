import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomePage() {
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
        setMovies(() => [...response.results]);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}'`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default HomePage;
