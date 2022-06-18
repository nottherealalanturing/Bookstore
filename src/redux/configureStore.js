import { configureStore } from '@reduxjs/toolkit';
import { booksReducer, categoriesReducer } from './index';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
