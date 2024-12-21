import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUpcomingMovies = createAsyncThunk(
    'upcoming/fetchUpcomingMovies',
    async(_,{rejectWithValue}) => {
        try {
            const res = await axios.get('https://nimap.onrender.com/api/v1/movies/upcoming-movies');

            if(!res.data.success){
                throw new Error('failed to fetch upcoming movies')
            }
            console.log(res.data.data);
            
            return res.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error)
        }
    }
)

const upcomingSlice = createSlice({
    name : 'upcoming',
    initialState : {
        upcoming : [],
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
            .addCase(fetchUpcomingMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state,action) => {
                state.loading = false;
                state.upcoming = action.payload;
            })
            .addCase(fetchUpcomingMovies.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {setPage} = upcomingSlice.actions

export default upcomingSlice.reducer