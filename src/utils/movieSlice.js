import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    trailerVideo:null,
    TrendingMovie:null,
    PopularMovies:null,
    // UpcomingMovies:null,
  },
  reducers:{
    addNowPlayingMovie:(state,action)=>{
    state.nowPlayingMovies=action.payload;
    },
    addPopularMovie:(state,action)=>{
    state.PopularMovies=action.payload;
    },
    addUpcomingMovie:(state,action)=>{
    state.UpcomingMovies=action.payload;
    },
    addTrendingMovie:(state,action)=>{
    state.TrendingMovie=action.payload;
    },
    addTrailerVideos:(state,action)=>{
    state.trailerVideo=action.payload;
    },
  },
},


);

export const {addNowPlayingMovie,addTrailerVideos,addPopularMovie,addTrendingMovie,addUpcomingMovie}=movieSlice.actions
export default  movieSlice.reducer;