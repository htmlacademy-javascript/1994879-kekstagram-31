
import { renderComments } from './render-comments.js';
import { openPhotoModal } from './render-photo.js';
import { loadPhotos } from './server-data.js';
import { initFilters } from './filter-thumbnails.js';
import { showErrorAlert } from './messages.js';

const COMMENTS_SHOW_COUNT = 5;

let photos = [];
let currentPhoto = null;
let currentCommentsCount = 0;

const initGallery = async () => {
  try {
    photos = await loadPhotos();
  } catch(error) {
    showErrorAlert();
    return;
  }
  initFilters(photos);
};

const isAllCommentsRendered = () => currentCommentsCount >= currentPhoto.comments.length;

const renderNextComments = () => {
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

export { initGallery, showPhotoById, renderNextComments, isAllCommentsRendered };
