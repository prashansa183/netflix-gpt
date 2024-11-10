import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import backgroundimg from "../utils/header-image.png";

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10 ">
          <img src={backgroundimg} alt="logo" />
        </div>
      <GptSearchBar/>
      <h1>movie suggest</h1>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch