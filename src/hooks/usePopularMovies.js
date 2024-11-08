
import { API_OPTIONS } from  "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";

const usePopularMovies=()=>{
  const dispatch = useDispatch();

  //fetch data from tmdb api and update store 
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    

    //this below is a promise
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}
export default usePopularMovies; 