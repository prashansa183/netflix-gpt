
import { API_OPTIONS } from  "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const useUpcomingMovies=()=>{
  const dispatch = useDispatch();

  const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies); //memoization

  //fetch data from tmdb api and update store 
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    

    //this below is a promise
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    if(!UpcomingMovies)
    getTrendingMovies();
  }, []);
}
export default useUpcomingMovies; 