const moviesData = {
  horror: ["Annabelle", "The Exorcist", "A Nightmare on Elm Street", "The Conjuring", "It"],
  comedy: ["The Hangover", "Superbad", "Step Brothers", "Anchorman", "Dumb and Dumber"],
  action: ["Die Hard", "Mad Max: Fury Road", "John Wick", "Gladiator", "The Dark Knight"],
  sciencefiction: ["Inception", "The Matrix", "Interstellar", "Blade Runner 2049", "The Terminator"],
  romance: ["The Notebook", "Titanic", "Pride & Prejudice", "La La Land", "Crazy Rich Asians"]
};

// Function to search for movies based on a genre keyword
const movieSearch = (keyword) => {
  return moviesData[keyword] || [];
};

export default movieSearch;
