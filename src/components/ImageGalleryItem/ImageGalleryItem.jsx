import { StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  return (
    <StyledImageGalleryItem>
      <img src={src} alt={alt} className="image" id={id} onClick={onClick} />
    </StyledImageGalleryItem>
  );
};
