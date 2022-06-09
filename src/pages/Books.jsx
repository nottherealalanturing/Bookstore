import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Book';
import Form from '../components/Form';
import { addBook, deleteBook, getBooks } from '../redux/books/books';

const Books = () => {
  const [form, setForm] = React.useState({ title: '', author: '', category: 'Fiction' });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.title && form.author) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title: form.title,
          author: form.author,
          category: 'Fiction',
        })
      );
    }
    setForm({ title: '', author: '' });
  };

  const handleDelete = (e) => {
    dispatch(deleteBook(e));
  };

  if (books !== []) {
    return (
      <>
        <div className="books">
          <ul>
            {books.map((book) => (
              <Book
                author={book.author}
                title={book.title}
                id={book.id}
                key={book.id}
                category={book.category}
                handleDeleteProps={handleDelete}
              />
            ))}
          </ul>
          <Form
            handleUpdateProps={handleUpdate}
            formStateProps={form}
            handleSubmitProps={handleSubmit}
          />
        </div>
      </>
    );
  }
  return <h2>Please add a book</h2>;
};

export default Books;
