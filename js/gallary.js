import { generatePhoto } from './data';

let photos;

const initGallary = (count) => {
  photos = generatePhoto(count);
  return photos;
};

const getPhotos = () => photos;
const findPhoto = (id) => photos.find((item) => item.id === id);

export { initGallary, getPhotos, findPhoto };
