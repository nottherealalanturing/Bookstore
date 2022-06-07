import { combineReducers, createStore } from '@reduxjs/toolkit';
import { books, categories } from './index';

const reducers = { books, categories };

const store = createStore(combineReducers(reducers));

export default store;
