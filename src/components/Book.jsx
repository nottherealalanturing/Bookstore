import React from 'react';
import PropTypes from 'prop-types';
import './styles/book.css';

const Book = (props) => {
  const { author, title, id, handleDeleteProps } = props;
  return (
    <li className="bookContainer">
      <p>
        {title}
        ::
        {author}
      </p>
      <button
        type="button"
        data-id={id}
        onClick={(event) => handleDeleteProps(event.target.dataset.id)}
      >
        delete
      </button>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  handleDeleteProps: PropTypes.func,
};

Book.defaultProps = {
  author: 'unknown',
  title: 'unknown',
  id: 'unknown',
  handleDeleteProps: () => {},
};

export default Book;
