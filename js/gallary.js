
import { renderComments } from './render-comments';
import { openPhotoModal } from './render-photo';
import { getData } from './server-data';
import { initFilters } from './filter-thumbnails.js';
import { showErrorAlert } from './messages';

const COMMENTS_SHOW_COUNT = 5;

let photos = [];
let currentPhoto = null;
let currentCommentsCount = 0;

const initGallary = async () => {
  try {
    photos = await getData();
  } catch(error) {
    showErrorAlert(error);
    return;
  }
  initFilters(photos);
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
