import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PYvju9tS8O3lJv99pDDU/books';

const ADD_BOOK = 'books/addBook';
const DELETE_BOOK = 'books/remove';
const GET_BOOKS = 'books/get';

export const addBook = (book) => (dispatch) => axios({
  method: 'post',
  url: baseURL,
  data: {
    ...book,
  },
})
  .then((res) => {
    if (res.status === 201) {
      dispatch({ type: ADD_BOOK, payload: book });
    }
  })
  .catch((e) => e);

export const deleteBook = (id) => (dispatch) => axios({
  method: 'delete',
  url: `${baseURL}/${id}`,
})
  .then((res) => {
    if (res.status === 201) {
      dispatch({ type: DELETE_BOOK, payload: id });
    }
  })
  .catch((e) => e);

export const getBooks = () => (dispatch) => axios
  .get(baseURL)
  .then((res) => res.data)
  .then((data) => {
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        id: key,
        ...book,
      };
    });
    dispatch({ type: GET_BOOKS, payload: books });
  })
  .catch((e) => e);

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.payload];
    case DELETE_BOOK: {
      return books.filter((book) => book.id !== action.payload);
    }
    case GET_BOOKS: {
      return [...action.payload];
    }
    default:
      return books;
  }
};

export default booksReducer;
