import GalleryList from './ImageGallery.styled';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleyItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </GalleryList>
  );
};

Gallery.propTypes = {
  searchQuery: PropTypes.string,
};

export default Gallery;
