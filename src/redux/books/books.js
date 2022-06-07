export const addBook = (book) => ({
  type: 'books/addBook',
  payload: book,
});

export const deleteBook = (book) => ({
  type: 'books/remove',
  payload: book,
});

const initialState = [];

const booksReducer = (books = initialState, action) => {
  switch (action.type) {
    case 'books/addBook':
      return [...books, action.payload];
    case 'books/deleteBook':
      return books.filter((book) => book.id !== action.payload.id);
    default:
      return books;
  }
};

export default booksReducer;
