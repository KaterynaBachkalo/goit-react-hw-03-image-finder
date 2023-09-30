import { StyledSearchbar } from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <StyledSearchbar>
      <form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearchbar>
  );
};
