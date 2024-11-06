import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground.js";
import VideoTitle from "./videoTitle.js";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log("movies",movies)

  if (!movies) return null;
  // if (!Array.isArray(movies) || movies.length === 0) return null;

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div>
      <h1>hello</h1>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
