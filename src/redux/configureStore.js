import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { booksReducer, categoriesReducer } from './index';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
