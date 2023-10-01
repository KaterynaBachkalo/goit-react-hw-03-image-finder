import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    isLoading: false,
    error: null,
    currentPage: 1,
    modal: {
      isOpen: false,
      modalImageURL: null,
      tags: null,
    },
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.onCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.onCloseModal();
    }
  };

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

  // onLoadMore = () => {
  //   this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));

  //   this.loadMoreImages(this.props.searchText, this.state.currentPage);
  // };

  render() {
    return (
      <>
        <StyledImageGallery>
          {this.props.images.map(
            ({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                src={webformatURL}
                alt={tags}
                onClick={() => this.onOpenModal(largeImageURL, tags)}
              />
            )
          )}
        </StyledImageGallery>
        {this.props.images && (
          <Button
          // onClick={this.onLoadMore}
          />
        )}
        {this.state.modal.isOpen && (
          <Modal
            imageUrl={this.state.modal.modalImageURL}
            alt={this.state.modal.tags}
            onClick={this.onOverlayClick}
          />
        )}
      </>
    );
  }
}
