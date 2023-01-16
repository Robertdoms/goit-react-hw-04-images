import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31255708-d64c8ef906081389dd3842ce2';

const getApiResult = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default getApiResult;
