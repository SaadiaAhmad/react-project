import { createSlice, configureStore } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name:'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            //
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

console.log('Store:', store);
console.log('Starting state:', store.getState());


store.dispatch(songsSlice.actions.addSong('Some song'));

console.log(store.getState());

export { store };