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


store.dispatch({
    type: 'song/addSong',
    payload: 'New Song'
});

console.log(store.getState());