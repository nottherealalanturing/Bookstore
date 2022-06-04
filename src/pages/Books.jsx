import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => (
  <div className="books">
    <ul>
      {Array(5)
        .fill('')
        .map((book, index) => (
          <Book name={index} key={book} />
        ))}
    </ul>
    <Form />
  </div>
);

export default Books;
