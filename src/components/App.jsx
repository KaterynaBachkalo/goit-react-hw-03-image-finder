import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

import { fetchImages } from './services/api';

import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchAllImages();
  }

  fetchAllImages = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchImages();

      this.setState({ images: images });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <StyledApp>
        <Searchbar />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button />
        {/* <Modal></Modal> */}
      </StyledApp>
    );
  }
}
