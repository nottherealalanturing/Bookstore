import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books">
      <ul>
        {books.map((book) => (
          <Book author={book.author} title={book.title} key={book} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
