
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import MainContainer from "./mainContainer.js";


// import secondaryContainer  from "./secondaryContainer"
import SecondaryContainer from "./secondaryContainer.js"
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTrendingMovies from "../hooks/useTrendingMovie.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies()
  useTrendingMovies()
  useUpcomingMovies();
  
  return (
    <div>

      <Header />
      <MainContainer />
      <SecondaryContainer/>
      
    </div>
  )
};

export default Browse;
