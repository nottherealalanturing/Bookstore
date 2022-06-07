const ADD_BOOK = 'books/addBook';
const DELETE_BOOK = 'books/remove';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  payload: book,
});

const initialState = [
  { author: 'Suzanne Collins', title: 'The Hunger Games', genre: 'Action' },
  { author: 'Harper Lee', title: 'To Kill a mockingbird', genre: 'Action' },
  { author: 'F. Scott Fitzgerald', title: 'The Great Gatsby', genre: 'Action' },
];

const booksReducer = (books = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.payload];
    case DELETE_BOOK:
      return books.filter((book) => book.id !== action.payload.id);
    default:
      return books;
  }
};

export default booksReducer;
