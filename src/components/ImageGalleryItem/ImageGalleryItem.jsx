import { StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  const showImages = Array.isArray(images) && images.length;
  console.log(images);

  showImages ?? images.map(image => console.log(image.hits));

  return (
    <StyledImageGalleryItem>
      {showImages ??
        images.map(({ hits: { id, webformatURL, largeImageURL } }) => (
          <img src={webformatURL} alt="" className="image" id={id} />
        ))}
    </StyledImageGalleryItem>
  );
};
