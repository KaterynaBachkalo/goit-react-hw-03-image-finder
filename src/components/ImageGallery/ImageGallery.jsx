import { StyledImageGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <StyledImageGallery>
      <ImageGalleryItem images={images} />
    </StyledImageGallery>
  );
};
