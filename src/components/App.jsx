import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

import { findImagesByName } from './services/api';

import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    searchedImageName: null,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchedImageName !== this.state.searchedImageName) {
      this.fetchImagesByName();
    }
  }

  fetchImagesByName = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await findImagesByName(this.state.searchedImageName);

      this.setState({ images: response.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
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

  handleClick = event => {
    console.log(event);
  };

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <StyledApp>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {showImages && <ImageGallery images={this.state.images} />}

        {this.state.isLoading && <Loader />}
      </StyledApp>
    );
  }
}
