import React, { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId);

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
  console.log('movie');
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
