export const Search = () => {
  return (
    <>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        /* value={query} */
        /* onChange={(e) => setQuery(e.target.value)} */
      />
    </>
  );
};
