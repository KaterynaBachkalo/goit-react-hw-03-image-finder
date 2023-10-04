import { Component } from 'react';
import { StyledSearchbar, StyledInput } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchedImageName: '',
  };

  handleChange = event => {
    this.setState({
      searchedImageName: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.handleSearchSubmit(this.state.searchedImageName);

    event.currentTarget.reset();
  };

  render() {
    return (
      <StyledSearchbar>
        <form className="form" onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </StyledSearchbar>
    );
  }
}
