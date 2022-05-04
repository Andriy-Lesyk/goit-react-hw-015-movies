import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Div} from './MovieDetailsPage.styles'

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

  console.log(movie.poster_path);

  return (
    
    <Div>
      <div>
        <img src={`https://www.themoviedb.org${movie.poster_path}`} width='300px' alt={'Poster'} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average}</p>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul>{movie.genres && movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
      </div>
    </Div>
    
  );
}

export default MovieDetailsPage;
