import React from 'react';

const Form = () => (
  <form className="book-form">
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="Author" />
    <button type="button" className="add-btn">
      Add Book
    </button>
  </form>
);

export default Form;
