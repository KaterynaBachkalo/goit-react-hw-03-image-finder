import { StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, src, alt, onOpenModal }) => {
  return (
    <StyledImageGalleryItem>
      <img
        src={src}
        alt={alt}
        className="image"
        id={id}
        onClick={onOpenModal}
      />
    </StyledImageGalleryItem>
  );
};
