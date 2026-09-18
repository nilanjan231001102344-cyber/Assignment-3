function SearchBar({
  searchTerm,
  onSearchChange
}) {
  return (
    <div className="search-box">

      <span className="search-icon">
        🔍
      </span>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
        placeholder="Search by name, ID, department or phone..."
      />

    </div>
  );
}

export default SearchBar;