import axios from 'axios';

const API_KEY = '38847418-8a23d2d3b7e0a097f24ebe266';

export const fetchImages = async () => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

// export const findPostById = async postId => {
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12{postId}`
//   );
//   return data;
// };
