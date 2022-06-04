import React from 'react';
import './styles/book.css';

const Book = (props) => {
  return <li className={'bookContainer'}>Book {props.name}</li>;
};

export default Book;
