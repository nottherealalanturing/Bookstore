import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBook } from '../redux/books/books';

const Books = () => {
  const [form, setForm] = React.useState({});

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.title && form.author) {
      dispatch(addBook(form));
    }
    setForm({ title: '', author: '' });
  };

  return (
    <div className="books">
      <ul>
        {books.map((book) => (
          <Book author={book.author} title={book.title} key={book.author} />
        ))}
      </ul>
      <Form
        handleUpdateProps={handleUpdate}
        formStateProps={form}
        handleSubmitProps={handleSubmit}
      />
    </div>
  );
};

export default Books;
