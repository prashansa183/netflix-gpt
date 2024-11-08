
import { API_OPTIONS } from  "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useTrendingMovies=()=>{
  const dispatch = useDispatch();

  //fetch data from tmdb api and update store 
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    

    //this below is a promise
    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovie(json.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
}
export default useTrendingMovies; 