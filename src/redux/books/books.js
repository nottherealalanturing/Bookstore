import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PYvju9tS8O3lJv99pDDU/books';

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await axios({
    method: 'post',
    url: baseURL,
    data: {
      ...book,
    },
  });
  return book;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (args) => {
  await axios({
    method: 'delete',
    url: `${baseURL}/${args}`,
  });
  return args;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const data = await axios.get(baseURL);
  return data.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = Object.keys(action.payload).map((key) => {
        const book = action.payload[key][0];
        return {
          id: key,
          ...book,
        };
      });
      return books;
    });
  },
});

const { reducer } = booksSlice;

export default reducer;
