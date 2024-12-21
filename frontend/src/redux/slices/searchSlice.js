import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchMovie = createAsyncThunk(
    'search/fetchSearchMovie',
    async (query,{rejectWithValue}) =>{
        try {
            const res = await axios.get('https://nimap.onrender.com/api/v1/movies/search',{params : {query}})

            if(!res.data.success){
                throw new Error('failed to fetch the search movie')
            }

            return res.data.data || []
        } catch (error) {
            return rejectWithValue(error.response.data.message || error)
        }
    }
)

const searchSlice = createSlice({
    name : 'search',
    initialState : {
        searchMovie : [],
        loading : false,
        error : null,
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
            .addCase(fetchSearchMovie.pending, (state) =>{
                state.loading = true,
                state.error = null
            })
            .addCase(fetchSearchMovie.fulfilled, (state,action) => {
                state.loading = false,
                state.searchMovie = action.payload
            })
            .addCase(fetchSearchMovie.rejected, (state,action) => {
                state.loading = false,
                state.error = action.payload
            })
    }
})

export default searchSlice.reducer;