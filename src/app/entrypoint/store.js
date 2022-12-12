import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from '../components/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
