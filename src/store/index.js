import { configureStore } from "@reduxjs/toolkit";
import {
  addSong,
  removeSong,
  resetSongs,
  songsReducer,
} from "./slices/songsSlice";
import {
  addMovie,
  moviesReducer,
  removeMovie,
  resetMovies,
} from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export {
  store,
  addSong,
  removeSong,
  resetSongs,
  addMovie,
  removeMovie,
  resetMovies,
};
