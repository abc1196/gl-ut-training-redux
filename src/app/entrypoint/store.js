import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from '../features/Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
