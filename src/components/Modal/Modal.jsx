import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = ({ imageUrl, alt, onClick }) => {
  return (
    <StyledOverlay onClick={onClick}>
      <StyledModal>
        <img src={imageUrl} alt={alt} />
      </StyledModal>
    </StyledOverlay>
  );
};
