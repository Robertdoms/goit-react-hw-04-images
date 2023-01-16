import React from 'react';
import { toast } from 'react-toastify';
import Container from './App.styled';
import Searchbar from './Searchbar';
import Gallery from './ImageGallery';
import getApiResult from '../services';
import LoaderWrapper from './Loader/Loader';
import Button from './Button';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getFetch() {
      try {
        setLoading(true);
        const updatedImages = await getApiResult(searchQuery, page);
        if (updatedImages.length === 0) {
          toast('No results');
          setLoading(false);
          return;
        }
        setImages(prevImages => [...prevImages, ...updatedImages]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getFetch();
  }, [searchQuery, page]);

  const onFormSubmit = newQuery => {
    if (searchQuery === newQuery || newQuery.trim() === '') {
      toast('can`t be empty');
      return;
    }
    setSearchQuery(newQuery);
    setImages([]);
    setPage(1);
  };
  return (
    <Container>
      <Searchbar onFormSubmit={onFormSubmit} />
      {images.length > 0 && <Gallery images={images} />}
      {images.length !== 0 && !loading && (
        <Button loadMore={() => setPage(prevPage => prevPage + 1)} />
      )}
      {loading && <LoaderWrapper />}
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
