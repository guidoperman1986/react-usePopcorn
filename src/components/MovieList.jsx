import { Movie } from "./Movie";

export const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies.map((movie, idx) => (
        <Movie movie={movie} key={idx} />
      ))}
    </ul>
  );
};
