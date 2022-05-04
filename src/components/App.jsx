import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import { Layout } from 'components/Layout/Layout';
import MoviesPage from './MoviesPage/MoviesPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage/>}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          
        </Route>
      </Routes>
    </div>
  );
};
