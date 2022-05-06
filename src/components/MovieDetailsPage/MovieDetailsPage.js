import React, { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Div, Links, Description } from './MovieDetailsPage.styles';

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US`
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
        setMovie(() => ({ ...response }));
      });
  }, [movieId]);

  return (
    <div>
      <Div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} width="250px" alt={'Poster'} />
        </div>
        <Description>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </Description>
      </Div>
      <h5>Additional information</h5>
      <Links>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Rewiews</Link>
      </Links>
      <Outlet />
    </div>
  );
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.object,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      
    })
  ),
};
export default MovieDetailsPage;
