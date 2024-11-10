import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import backgroundimg from "../utils/header-image.png";

const GptSearch = () => {
  return (
    <>
      {/* Full-screen background image */}
      <div className="fixed inset-0 -z-10">
        <img 
          className="w-full h-full object-cover" 
          src={backgroundimg} 
          alt="background" 
        />
      </div>

      {/* Main content */}
      <div className=" md:p-0">
        
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
