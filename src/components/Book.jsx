import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/book.css';

const Book = (props) => {
  const { author, title, genre, completed, chapter } = props;
  return (
    <div className={styles.bookContainer}>
      <Book.LeftBlock author={author} title={title} genre={genre} />
      <Book.MiddleBlock completed={completed} />
      <Book.RightBlock chapter={chapter} />
    </div>
  );
};

Book.LeftBlock = (props) => {
  const { author, title, genre } = props;
  return (
    <div className="leftblock">
      <p className="bookgenre">{genre}</p>
      <h2 className="booktitle">{title}</h2>
      <p className="bookauthor">{author}</p>
      <div className="modifycolumn">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.MiddleBlock = (props) => {
  const { completed } = props;
  return (
    <div className="middleblock">
      <span className="completedPercentage"></span>
      <div>
        <p>{completed}</p>
      </div>
    </div>
  );
};

Book.RightBlock = (props) => {
  const { chapter } = props;
  return (
    <div className="rightblock">
      <p>CURRENT CHAPTER</p>
      <p>Chapter {chapter}</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  );
};

Book.prototype = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
