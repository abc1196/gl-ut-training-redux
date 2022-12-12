// vendors
import { configureStore } from '@reduxjs/toolkit';

// reducers
import { reducer as counterReducer } from '../views/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
