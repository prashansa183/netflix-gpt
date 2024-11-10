import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground.js";
import VideoTitle from "./videoTitle.js";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
 

  if (!movies) return null;
  
  
  const mainMovie = movies[0];
  const { original_title, overview,id } = mainMovie;
  return (
    <div>
      
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
