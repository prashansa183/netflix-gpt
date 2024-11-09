
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer.js";
import SecondaryContainer from "./secondaryContainer.js"
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTrendingMovies from "../hooks/useTrendingMovie.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.js";
import { useSelector } from "react-redux";



const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies()
  useTrendingMovies()
  useUpcomingMovies();
  
  return (
    <div>

      <Header />

      {showGptSearch ?(
        <GptSearch/>
      ):(
        <>
          <MainContainer/>
          <SecondaryContainer/> 
        </>
      )}
      
      
      
      
    </div>
  )
};

export default Browse;
