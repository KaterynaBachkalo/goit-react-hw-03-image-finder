import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    searchedImageName: '',
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

        <ImageGallery searchedImageName={this.state.searchedImageName} />
      </StyledApp>
    );
  }
}
