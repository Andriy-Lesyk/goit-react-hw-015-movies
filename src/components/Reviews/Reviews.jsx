import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Li} from './Reviews.styled'

function Reviews() {
  const [reviews, setRevievs] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a4a29fffc470fecd93a30cf31010c680&language=en-US&page=1`
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
        setRevievs(() => [...response.results]);
      });
  }, [movieId]);
  
  return (
    <div>
      {reviews &&
        reviews.map(review => (
          <Li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </Li>
        ))}
      {reviews.length === 0 && <p>We don't have any reviews</p>}
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
