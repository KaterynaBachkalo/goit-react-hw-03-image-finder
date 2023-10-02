import { Component } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <StyledOverlay onClick={this.onOverlayClick}>
        <StyledModal>
          <img src={this.props.imageUrl} alt={this.props.alt} />
        </StyledModal>
      </StyledOverlay>
    );
  }
}
