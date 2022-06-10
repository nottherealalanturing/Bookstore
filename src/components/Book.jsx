import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
 // eslint-disable-next-line object-curly-newline
  const { author, category, title, id, handleDeleteProps } = props;
  return (
    <li className="book-panel">
      <div className="leftblock">
        <span className="book-genre">{category}</span>
        <span className="book-title">{title}</span>
        <span className="book-author">{author}</span>
        <span className="leftblockbuttons">
          <button data-id={id} type="button" className="lbBtn">
            Comments
          </button>
          <span className="btnLine" />
          <button
            data-id={id}
            type="button"
            className="lbBtn"
            onClick={(event) => handleDeleteProps(event.target.dataset.id)}
          >
            Remove
          </button>
          <span className="btnLine" />
          <button data-id={id} type="button" className="lbBtn">
            Edit
          </button>
        </span>
      </div>

      <div className="container">
        <div className="middleblock">
          <div className="progress-calc" />
          <span>
            <div className="progress">64%</div>
            <div className="completed">Completed</div>
          </span>
        </div>
        <span className="line2" />
        <div className="rightblock">
          <div className="chapter">CURRENT CHAPTER</div>
          <div className="lesson">Chapter 309</div>
          <button type="button" className="updateProgress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
  handleDeleteProps: PropTypes.func,
};

Book.defaultProps = {
  author: 'unknown',
  title: 'unknown',
  id: 'unknown',
  category: 'unknown',
  handleDeleteProps: () => {},
};

export default Book;
