import { generatePhoto } from './data';
import { openPhotoModal } from './render-photo';

let photos;

const initGallary = (count) => {
  photos = generatePhoto(count);
  return photos;
};

const findPhoto = (id) => photos.find((item) => item.id === id);

const showPhotoById = (id) => {
  const photo = findPhoto(id);
  if (photo) {
    openPhotoModal(photo);
  }
};

export { initGallary, showPhotoById };
