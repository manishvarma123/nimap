import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopMovies = createAsyncThunk(
    'top_rated/fetchTopMovies',
    async(_, {rejectWithValue}) => {
        try {
            const res = await axios.get('https://nimap.onrender.com/api/v1/movies/top-rated');

            if(!res.data.success){
                throw new Error('failed to fetch the top rated movies')
            }

            return res.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error)
        }
    }
)


const topRatedSlice = createSlice({
    name : 'top_rated',
    initialState : {
       top_rated : [],
       loading : false,
       error : null, 
       page : 1
    },
    reducers : {
        setPage : (state,action) =>{
            state.page = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchTopMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopMovies.fulfilled, (state,action) => {
                state.loading = false;
                state.top_rated = action.payload;
            })
            .addCase(fetchTopMovies.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const {setPage} = topRatedSlice.actions;

export default topRatedSlice.reducer