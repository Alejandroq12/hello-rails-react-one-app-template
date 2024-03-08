import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../slices/greetingSlice.js';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
