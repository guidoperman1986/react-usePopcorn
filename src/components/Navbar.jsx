import { Search } from "./Search";

export const Navbar = ({movies}) => {
  return (
    <nav className="nav-bar">
      <Search />

      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
};
