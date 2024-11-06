import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";

const VideoBackground = ({ movieID }) => {
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
  const dispatch =useDispatch()
  const [trailerId , setTrailerId] =useState(null)

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1034541/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideos(trailer))
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div> 
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
