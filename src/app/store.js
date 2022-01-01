import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "../features/movie/movieSlice.js";
import userReducer from "../features/user/userSlice.js"

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer
  },
});
