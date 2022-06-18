import { configureStore } from '@reduxjs/toolkit';
import { books, categories } from './index';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default store;
