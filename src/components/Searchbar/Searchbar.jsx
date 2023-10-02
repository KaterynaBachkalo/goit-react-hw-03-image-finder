import { StyledSearchbar, StyledInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <form className="form" onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <StyledInput
          className="input"
          name="searchedImageName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearchbar>
  );
};
