import React from 'react';
import PropTypes from 'prop-types';
import './styles/book.css';

const Book = (props) => {
  const { author, title } = props;
  return (
    <li className="bookContainer">
      <p>
        {title}
        ::
        {author}
      </p>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
};

Book.defaultProps = {
  author: 'unknown',
  title: 'unknown',
};

export default Book;
