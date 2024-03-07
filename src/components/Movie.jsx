/* eslint-disable react/prop-types */

export const Movie = ({ movie }) => {
  return (
    <li key={movie.imdbID}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.Poster}.jpg` } alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};
