
import { API_OPTIONS } from  "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useNowPlayingMovies=()=>{
  const dispatch = useDispatch();

  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies); //memoization


  //fetch data from tmdb api and update store 

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );

    //this below is a promise
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };
  useEffect(() => {
    if(!nowPlayingMovies)
     getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;  