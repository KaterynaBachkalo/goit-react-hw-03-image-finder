import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    searchedImageName: null,
    currentPage: 1,
    error: null,
  };

  handleSearchSubmit = event => {
    event.preventDefault();

    const searchedImageName =
      event.currentTarget.elements.searchedImageName.value;

    this.setState({
      searchedImageName: searchedImageName,
    });

    event.currentTarget.reset();
  };

  render() {
    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        <ImageGallery
          searchedImageName={this.state.searchedImageName}
          currentPage={this.state.currentPage}
        />
      </StyledApp>
    );
  }
}
