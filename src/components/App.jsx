import { Routes, Route } from 'react-router-dom';
import {lazy} from 'react';
//import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Layout  from 'components/Layout/Layout';
import MoviesPage from './MoviesPage/MoviesPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const HomePage = lazy(()=> import('./HomePage/HomePage'))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
