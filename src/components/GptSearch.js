import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import backgroundimg from "../utils/header-image.png";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10 ">
          <img src={backgroundimg} alt="logo" />
        </div>
      <GptMovieSuggestion/>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch