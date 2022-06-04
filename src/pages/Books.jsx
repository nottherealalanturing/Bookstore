import React from 'react';
import Book from '../components/Book';

const Books = () => {
  return (
    <div className="books">
      <ul>
        {Array(5)
          .fill('')
          .map((book, index) => {
            return <Book name={index} />;
          })}
      </ul>
    </div>
  );
};

export default Books;
