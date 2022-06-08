const ADD_BOOK = 'books/addBook';
const DELETE_BOOK = 'books/remove';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

const initialState = [
  {
    id: 1,
    author: 'Suzanne Collins',
    title: 'The Hunger Games',
    genre: 'Action',
  },
  {
    id: 2,
    author: 'Harper Lee',
    title: 'To Kill a mockingbird',
    genre: 'Action',
  },
  {
    id: 3,
    author: 'F. Scott Fitzgerald',
    title: 'The Great Gatsby',
    genre: 'Action',
  },
];

const booksReducer = (books = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.payload];
    case DELETE_BOOK: {
      return books.filter((book) => book.title !== action.payload);
    }
    default:
      return books;
  }
};

export default booksReducer;
