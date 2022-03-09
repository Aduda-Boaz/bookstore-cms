import React from 'react';

function BookList() {
  return (
    <div className='List-container'>
      <div className='BookDetils'>
      <p className="Genre">Category</p>
        <p className="BookTitle">Title</p>
        <p className="BookAuthor">Author</p>
        <button type="button" className="btn">Comment</button>
        <button type="button" className="btn">Remove</button>
        <button type="button" className="btn">Edit</button>
      </div>
      <div className='Scale'>
        <div className="GraphContainer" />
        <div className="Graph">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="Progress">
        <div className="progressBar" />
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="progressBtn btn">Update Book</button>
      </div>
    </div>
  );
}

export default BookList;