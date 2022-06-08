import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { books, categories } from './index';

const reducers = { books, categories };

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store;
