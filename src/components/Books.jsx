import React from 'react';
import Book from './Book';

const Books = () => {
  const bookstore = [];
  return (
    <div className="book">
      <ul>
        {bookstore.map((book) => {
          return <Book />;
        })}
      </ul>
    </div>
  );
};

export default Books;
