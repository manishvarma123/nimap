import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovieDetail = createAsyncThunk(
    'movie_detail/fetchMovieDetail',
    async (id,{rejectWithValue}) =>{
        try {
            const res = await axios.get(`https://nimap.onrender.com/api/v1/movies/${id}/movie-detail`);

            if(!res.data.success){
                throw new Error('failed to fetch the movie Details')
            }

            return res.data?.data
        } catch (error) {
            return rejectWithValue(error.response.data.message || error)
        }
    }
)

const movieDetailSlice = createSlice({
    name : 'movie_detail',
    initialState : {
        detail : {},
        loading : false,
        error : null
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
            .addCase(fetchMovieDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieDetail.fulfilled, (state,action) =>{
                state.loading = false;
                state.detail = action.payload;
            })
            .addCase(fetchMovieDetail.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default movieDetailSlice.reducer