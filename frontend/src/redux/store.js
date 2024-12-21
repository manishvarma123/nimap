import {configureStore} from '@reduxjs/toolkit';
import popularSlice from './slices/popularSlice.js';
import topSlice from './slices/topRatedSlice.js';
import upcomingSlice from './slices/upcomingSlice.js';
import detailSlice from './slices/movieDetailSlice.js';
import searchSlice from './slices/searchSlice.js';


const store = configureStore({
    reducer : {
        popular : popularSlice,
        top : topSlice,
        upcoming : upcomingSlice,
        detail : detailSlice,
        search : searchSlice,
    }
})

export default store