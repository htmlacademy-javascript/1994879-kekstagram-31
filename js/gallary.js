
import { generatePhoto } from './data';
import { renderComments } from './render-comments';
import { openPhotoModal } from './render-photo';

const COMMENTS_SHOW_COUNT = 5;

let photos = [];
let currentPhoto = null;
let currentCommentsCount = 0;

const initGallary = (count) => {
  photos = generatePhoto(count);
  return photos;
};

const isAllCommentsRendered = () => currentCommentsCount >= currentPhoto.comments.length;

const renderPartComments = () => {
  const part = currentPhoto.comments.slice(currentCommentsCount, currentCommentsCount + COMMENTS_SHOW_COUNT);
  renderComments(part);
  currentCommentsCount += part.length;
  return currentCommentsCount;
};

const findPhoto = (id) => photos.find((item) => item.id === id);

const showPhotoById = (id) => {
  const photo = findPhoto(id);
  if (!photo) {
    return;
  }
  currentPhoto = photo;
  currentCommentsCount = 0;
  openPhotoModal(currentPhoto);
};

export { initGallary, showPhotoById, renderPartComments, isAllCommentsRendered };
