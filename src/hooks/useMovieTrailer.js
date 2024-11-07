import React from "react";
import  { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
    // const [trailerId , setTrailerId] =useState(null)
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
