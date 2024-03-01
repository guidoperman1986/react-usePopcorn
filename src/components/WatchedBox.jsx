import { WatchedMovieList } from "./WatchedMovieList";
import { WatchedSummary } from "./WatchedSummary";


export const WatchedBox = ({ isOpen2, setIsOpen2, watched }) => {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched}/>          

          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};
