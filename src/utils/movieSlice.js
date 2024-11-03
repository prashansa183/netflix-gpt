import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
  name:"movie",
  initialState:{
    nowPayingMovies:null,
  },
  reducers:{
    addNowPlayingMovie:(state,action)=>{
      state.nowPayingMovies=action.payload;
    }
  }

});

export const {addNowPlayingMovie}=movieSlice.actions
export default  movieSlice.reducer;