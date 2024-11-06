
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./mainContainer";
// import MainContainer from "./MainContainer.js";
import MainContainer from "./mainContainer.js";


// import secondaryContainer  from "./secondaryContainer"
import SecondaryContainer from "./secondaryContainer.js"
const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>

      <Header />
      <MainContainer />
      <h1>sec</h1>
      <SecondaryContainer/>
      
    </div>
  )
};

export default Browse;
