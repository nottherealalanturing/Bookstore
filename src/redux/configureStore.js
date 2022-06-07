import { combineReducers, createStore } from '@reduxjs/toolkit';

const reducers = {};

const store = createStore(combineReducers(reducers));

export default store;
