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
    <div className="pt-[30%] bg-black md:pt-0">
      
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
