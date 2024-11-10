import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  if (!movieNames) return null;

  return (
    <div className="p-4 ,-4 bg-opacity-90 bg-black text-white">
      {movieNames.map((movieNames,index) => (
        <MovieList 
        key={movieNames}
        title={movieNames}
        movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
