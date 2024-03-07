import { useState } from "react";
import { Box } from "./ListBox";
import { MovieList } from "./MovieList";
import { WatchedMovieList } from "./WatchedMovieList";
import { WatchedSummary } from "./WatchedSummary";

export const Main = ({ movies, watched }) => {
  const [isOpen1, setIsOpen1] = useState(true)
  const [isOpen2, setIsOpen2] = useState(true)

  return (
    <main className="main">
      <Box isOpen={isOpen1} setIsOpen={setIsOpen1}>
        <MovieList movies={movies} />
      </Box>

      <Box isOpen={isOpen2} setIsOpen={setIsOpen2}>
        <>
          <WatchedSummary watched={watched} />

          <WatchedMovieList watched={watched} />
        </>
      </Box>
    </main>
  );
};
