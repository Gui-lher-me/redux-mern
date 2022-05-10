import { combineReducers } from '@reduxjs/toolkit';
import { counterSlice } from '../app/store/slices';

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
