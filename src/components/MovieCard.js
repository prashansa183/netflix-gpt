import React from 'react';
import { IMG_CON_URL } from '../utils/constants';

const MovieCard = ({ posterPath, title,overview,rating }) => {
  if (!posterPath) return null;

  return (
    <div className="relative w-36 md:w-48 pr-4 transition-transform duration-300 transform hover:scale-105">
      <img
        alt={title}
        src={IMG_CON_URL + posterPath}
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
      

      {/* Overlay for Title, Overview, and Rating */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-lg">
        {/* Movie Title */}
        <p className="text-white text-sm font-semibold truncate">{title}</p>

        {/* Movie Overview */}
        <p className="text-white text-xs mt-2 truncate">
          {overview ? overview.substring(0, 100) + "..." : "No overview available"}
        </p>

        {/* Movie Rating */}
        <span className="text-white text-xs mt-2 font-semibold">
          Rating: {rating ? rating : "N/A"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
