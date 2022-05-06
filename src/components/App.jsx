import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'components/Layout/Layout';


const HomePage = lazy(() =>
  import('./HomePage/HomePage' /* webpackChunkName: "HomePage"*/)
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "Reviews"*/)
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast"*/));
const MoviesPage = lazy(() =>
  import('./MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/
  )
);

export const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
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
      </Suspense>
    </div>
  );
};
