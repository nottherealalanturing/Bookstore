import PropTypes from 'prop-types';
import React from 'react';

const Form = (props) => {
  const { handleUpdateProps, formStateProps, handleSubmitProps } = props;
  return (
    <form className="book-form" onSubmit={handleSubmitProps}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleUpdateProps}
        value={formStateProps.title}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        onChange={handleUpdateProps}
        value={formStateProps.author}
      />
      <button type="submit" className="add-btn">
        Add Book
      </button>
    </form>
  );
};

Form.propTypes = {
  handleUpdateProps: PropTypes.func,
  formStateProps: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }),
  handleSubmitProps: PropTypes.func,
};

Form.defaultProps = {
  handleUpdateProps: () => {},
  formStateProps: {},
  handleSubmitProps: () => {},
};

export default Form;
