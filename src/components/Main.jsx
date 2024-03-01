import { Box } from "./ListBox";
import { MovieList } from "./MovieList";
import { WatchedMovieList } from "./WatchedMovieList";
import { WatchedSummary } from "./WatchedSummary";

export const Main = ({
  isOpen,
  setIsOpen,
  movies,
  watched,
}) => {
  return (
    <main className="main">
      <Box isOpen={isOpen} setIsOpen={setIsOpen}>
        <MovieList movies={movies} />
      </Box>

      <Box isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
          <WatchedSummary watched={watched} />

          <WatchedMovieList watched={watched} />
        </>
      </Box>
    </main>
  );
};
