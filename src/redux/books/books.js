import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PYvju9tS8O3lJv99pDDU/books';

export const addBook = createAsyncThunk('books/addBook', async(book, thunkAPI) => {
  const data = await axios({
    method: 'post',
    url: baseURL,
    data: {
      ...book,
    },
  });
  return data.data;
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId, thunkAPI) => {
  const data = await axios({
    method: 'delete',
    url: `${baseURL}/${id}`,
  });
  return data.data
})

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (args, thunkAPI) => {
  const data = await  axios.get(baseURL);
  return data.data;
})

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push(action.payload)
    }),
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.filter((book) => book.id !== action.payload);
    }),
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = Object.keys(data).map((key) => {
        const book = data[key][0];
        return {
          id: key,
          ...book,
        };
      });
      state = books;
    }),
  },

})

const {actions, reducer} = booksSlice

/* export {} = actions;
 */
export default reducer
