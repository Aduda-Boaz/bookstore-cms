import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookList = ({
  id,
  title,
  author,
  category,
}) => {
  const dispatch = useDispatch();
  return (
    <li id={id}>
      <h4>{category}</h4>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button" onClick={(e) => { dispatch(removeBook(e.target.parentNode.id)); }}>Remove</button>
    </li>
  );
};

BookList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookList;
