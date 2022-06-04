import React from 'react';
import Book from '../components/Book';

const Books = () => {
  return (
    <div className="books">
      <ul>
        {Array(5)
          .fill('')
          .map((book) => {
            return <Book />;
          })}
      </ul>
    </div>
  );
};

export default Books;
