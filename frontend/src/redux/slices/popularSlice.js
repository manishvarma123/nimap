import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularMovies = createAsyncThunk(
    'popular/fetchPopularMovies',
    async(_, {rejectWithValue}) => {
        
        try {
           const res = await axios.get('https://nimap.onrender.com/api/v1/movies/popular');

           if(!res?.data?.success){
            throw new Error('failed to fetch popular movies')
           }
           
           return res.data.data ;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error);
        }
    }
)


const popularSlice = createSlice({
    name : 'popular',
    initialState : {
        popular : [],
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
            .addCase(fetchPopularMovies.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPopularMovies.fulfilled, (state,action)=>{
                state.loading = false;
                state.popular = action.payload;
            })
            .addCase(fetchPopularMovies.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const {setPage} = popularSlice.actions

export default popularSlice.reducer