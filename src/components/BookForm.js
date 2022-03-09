import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const getTitle = (event) => setTitle(event.target.value);
  const getAuthor = (event) => setAuthor(event.target.value);
  const getCategory = (event) => setCategory(event.target.value);

  const submitBookToStore = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form className="add-new">
        <h4>Add new book</h4>
        <label htmlFor="Title">
          <input id="Title" placeholder="Book Title" onChange={getTitle} value={title} required />
        </label>
        <label htmlFor="Title">
          <input id="Author" placeholder="Book Author" onChange={getAuthor} value={author} required />
        </label>
        <label htmlFor="genre">
          <select className="book-selection" id="genre" onChange={getCategory} value={category} required>
            <option value="Unknown">Genre</option>
            <option value="Leadership">Leadership</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Business">Business</option>
            <option value="Romance">Romance</option>
          </select>
        </label>
        <button type="submit" className="add-book" onClick={() => submitBookToStore(title, author)}>Add</button>
      </form>
    </div>
  );
}

export default BookForm;
