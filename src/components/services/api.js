import axios from 'axios';

const API_KEY = '38847418-8a23d2d3b7e0a097f24ebe266';

export const findImagesByName = async (searchImage, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchImage}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
