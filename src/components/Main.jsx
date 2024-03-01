import { ListBox } from "./ListBox";
import { WatchedBox } from "./WatchedBox";

export const Main = ({
  isOpen1,
  setIsOpen1,
  isOpen2,
  setIsOpen2,
  movies,
  watched,
}) => {
  return (
    <main className="main">
      <ListBox isOpen1={isOpen1} setIsOpen1={setIsOpen1} movies={movies} />

      <WatchedBox isOpen2={isOpen2} setIsOpen2={setIsOpen2} watched={watched} />
    </main>
  );
};
