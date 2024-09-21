import css from './SearchBox.module.css';

const SearchBox = ({ searchText, handleSearch }) => {
  const handleChange = event => {
    handleSearch(event.target.value);
  };

  return (
    <div className={css.searchBox}>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
