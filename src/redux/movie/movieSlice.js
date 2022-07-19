/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {},
  reducers: {
    setMovie: (state, action) => {
      // console.log('CurrentState', action.payload);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (state = action.payload);
    },
    deleteMovie: () => {
      return;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;