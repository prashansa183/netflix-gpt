import React, { useRef } from "react";
// import lang from "../hooks/languageConstants";
import lang from "../utils/languageConstants";
import Openai from "../utils/openai";
import { useSelector } from "react-redux";
import movieSearch from "../utils/movieSearch";
import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const langkey=useSelector(store=>store.config.lang)
  const SearchText=useRef(null);
const dispatch=useDispatch();
  const [movies, setMovies] = useState([]); 
  const [error, setError] = useState("");

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)

    const json=await data.json()
    return json.results;

  }

  const handleGptSearchClick=async()=>{
    
    const userQuery = SearchText.current.value.toLowerCase();
    console.log(userQuery)
    if (!userQuery) {
      setError("Please enter a query.");
      return;
    }
    //  Extract the keyword (for simplicity, use the last word in the query)
    const keyword = userQuery.split(" ").pop();
    console.log(keyword)
    // Call the search function with the keyword
    const results = movieSearch(keyword);
    //this is the array
    console.log(results)
    
    const data=results.map((movie)=> searchMovieTMDB(movie)) 
    //array of promises i.e [promise,promise,promise,promise,promise]

    const tmdbResults=await Promise.all(data)
    console.log(tmdbResults)
    dispatch(addGptMovieResult({movieNames:results,movieResults:tmdbResults}))

    // if (results.length > 0) {
    //   setMovies(results);  // Set movie results in state
    //   setError("");  // Clear any previous error
    // } else {
    //   setError("No movies found for the given keyword.");
    //   setMovies([]);
    // }




    // const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query:"+SearchText.current.value;+".only give me names of 5 movies , comma seperated like the example result given ahead. example result: Gadar,Sholay,Don,Golmaal,Koi mil gaya ."
    // make an api call to gpt api and get movie results

    // const gptResult=await Openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery}],
    //   model: 'gpt-3.5-turbo',})
      // console.log(gptResult.choices)

  };

  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={SearchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].GptSearchPlaceHolder}
        />
        <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white  rounded-lg" onClick={handleGptSearchClick}>
            {lang[langkey].Search}
        </button>
      </form>


      {/* the output  */}
      {error && <p className="text-red-500">{error}</p>}
        {movies.length > 0 && (
          <div className="mt-4">
            <h3>Recommended Movies:</h3>
            <ul>
              {movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default GptSearchBar;
