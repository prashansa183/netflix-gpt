const moviesData = {
  horror: ["Annabelle", "The Exorcist", "A Nightmare on Elm Street", "The Conjuring", "It"],
  comedy: [ "Superbad","The Hangover", "Step Brothers", "Anchorman", "Dumb and Dumber"],
  action: ["Die Hard", "Mad Max: Fury Road", "John Wick", "Gladiator", "The Dark Knight"],
  sciencefiction: ["Inception", "The Matrix", "Interstellar", "Blade Runner 2049", "The Terminator"],
  romantic: ["The Notebook", "Titanic", "Pride & Prejudice", "La La Land", "Crazy Rich Asians"]
};

// Function to search for movies based on a genre keyword
const movieSearch = (query) => {

   // Convert the query to lowercase and split it into individual words
   const keywords = query.toLowerCase().split(" ");

    console.log('this is keyword')
    console.log(keywords)
   // Look for a genre that matches any of the words in the query
   for (const key in moviesData) {
     if (keywords.includes(key)) {
       return moviesData[key];
     }

   }
 
   // Return an empty array if no genre is found in the query
   return [keywords.join(" ")];
  // return moviesData[keyword] || [];
};

export default movieSearch;
