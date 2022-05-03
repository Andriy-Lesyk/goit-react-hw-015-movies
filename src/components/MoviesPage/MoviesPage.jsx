import React, { useState, useEffect } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './MoviesPage.styles';
import { useNavigate, Link } from 'react-router-dom';


function MoviesPage() {
  const [search, setSearch] = useState('');
  const [respArray, setRespArray] = useState([]);
  const { url } = useNavigate();

  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (search.trim() === '') {
      alert('Введіть запит!');
      return;
    }
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US&page=1&include_adult=false&query=${search}`
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
        setRespArray(() => [...response.results]);
      });
  }, [search]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search movies"
          value={search}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
      {respArray && (
        <ul>
          {respArray.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}'`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesPage;
