import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function BookList(props) {
  const {
    id,
    title,
    author,
    category,
  } = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));

  return (
    <div className="List-container">
      <div className="BookDetils">
        <p className="Genre" value={category}>{category}</p>
        <p className="BookTitle">{title}</p>
        <p className="BookAuthor">{author}</p>
        <button type="button" className="btn">Comment</button>
        <button type="button" className="btn" onClick={remove}>Remove</button>
        <button type="button" className="btn">Edit</button>
      </div>
      <div className="Scale">
        <div className="Graph">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="Progress">
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn">Update Book</button>
      </div>
    </div>
  );
}

export default BookList;
