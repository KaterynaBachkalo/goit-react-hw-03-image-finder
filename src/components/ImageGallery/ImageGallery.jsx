import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Component } from 'react';
import { findImagesByName } from '../../services/api';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: null,
    totalImages: 500,
    totalImagesPerPage: null,
    isLoading: false,
    error: null,
    errorMessage: null,
    currentPage: 1,
    modal: {
      isOpen: false,
      modalImageURL: null,
      tags: null,
    },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchedImageName !== this.props.searchedImageName) {
      this.setState({
        images: null,
        currentPage: 1,
        totalImagesPerPage: null,
      });
      if (this.state.currentPage === 1) {
        this.fetchImagesByName(
          this.props.searchedImageName,
          this.state.currentPage
        );
      }
    }

    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchImagesByName(
        this.props.searchedImageName,
        this.state.currentPage
      );
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  fetchImagesByName = async (ImageName, page) => {
    try {
      this.setState({ isLoading: true });

      const response = await findImagesByName(ImageName, page);

      if (response.total !== 0) {
        this.setState(prevState => ({
          images:
            prevState.currentPage !== 1
              ? [...prevState.images, ...response.hits]
              : response.hits,
          errorMessage: null,
          totalImagesPerPage:
            prevState.totalImagesPerPage + response.hits.length,
        }));
      } else {
        this.setState({
          images: null,
          errorMessage: 'Sorry, there are no images...',
          currentPage: 1,
        });
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.searchedImageName !== this.props.searchedImageName &&
  //     this.props.searchedImageName
  //   ) {
  //     this.fetchImagesByName();
  //   }

  //   if (prevState.currentPage !== this.state.currentPage) {
  //     this.loadMoreImages(this.props.searchedImageName, this.state.currentPage);
  //   }
  // }

  // fetchImagesByName = async () => {
  //   try {
  //     this.setState({ isLoading: true });

  //     const response = await findImagesByName(
  //       this.props.searchedImageName,
  //       this.state.currentPage
  //     );

  //     if (response.total !== 0) {
  //       this.setState({
  //         images: response.hits,
  //         errorMessage: null,
  //         totalImagesPerPage: response.hits.length,
  //         currentPage: 1,
  //       });
  //     } else {
  //       this.setState({
  //         images: null,
  //         errorMessage: 'Sorry, there are no images...',
  //       });
  //     }
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  // onLoadMore = () => {
  //   this.setState(prevState => ({
  //     currentPage: prevState.currentPage + 1,
  //   }));
  // };

  // loadMoreImages = async (ImageName, page) => {
  //   try {
  //     this.setState({ isLoading: true });
  //     const response = await findImagesByName(ImageName, page);

  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...response.hits],
  //       errorMessage: null,
  //       totalImagesPerPage: prevState.totalImagesPerPage + response.hits.length,
  //     }));
  //     console.log('loadMoreImages ', this.state.images);
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  //---Modal----

  onOpenModal = (largeImageURL, tags) => {
    this.setState({
      modal: {
        isOpen: true,
        modalImageURL: largeImageURL,
        tags: tags,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalImageURL: null,
        tags: null,
      },
    });
  };

  render() {
    const {
      images,
      errorMessage,
      totalImagesPerPage,
      totalImages,
      error,
      isLoading,
    } = this.state;

    return (
      <>
        {error && <p className="error-message">{error}</p>}
        {errorMessage && (
          <div className="error-message">
            <p>{this.state.errorMessage}</p>
          </div>
        )}

        {images && (
          <StyledImageGallery>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                src={webformatURL}
                alt={tags}
                onOpenModal={() => this.onOpenModal(largeImageURL, tags)}
              />
            ))}
          </StyledImageGallery>
        )}

        {images && totalImagesPerPage <= totalImages && !isLoading && (
          <Button onClick={this.onLoadMore} />
        )}

        {this.state.isLoading && <Loader />}

        {this.state.modal.isOpen && (
          <Modal
            imageUrl={this.state.modal.modalImageURL}
            alt={this.state.modal.tags}
            onCloseModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}
