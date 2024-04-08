import { createSlice, configureStore } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name:'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        resetSongs(state, action) {
            return [];
        }
    }
});

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        resetMovies(state, action) {
            return [];
        }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

// console.log('Store:', store);
// console.log('Starting state:', store.getState());


// store.dispatch(songsSlice.actions.addSong('Some song'));

// console.log(store.getState());

export { store };
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;