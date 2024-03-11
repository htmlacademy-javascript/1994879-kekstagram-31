import { isEscapeKey, hideElement, showElement } from './util';
import { renderComments } from './render-comments';
import { COMMENTS_SHOW_COUNT } from './config';
import { photoElement, photoImgElement, photoLikesElement, photoDescriptionElement, commentsCountElement, commentsLoaderElement, commentsTotalElement,
  commentsShowElement, cancelButtonElement } from './selectors-key';

const renderPhoto = ({url, description, likes, comments }) => {
  photoImgElement.src = url;
  photoImgElement.alt = description;
  photoLikesElement.textContent = likes.toString();
  photoDescriptionElement.textContent = description;

  renderComments(comments);
  commentsShowElement.textContent = COMMENTS_SHOW_COUNT.toString();
  commentsTotalElement.textContent = comments.length.toString();
};

const onPhotoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};
const onCancelButtonClick = () => closePhoto();

const photoAddListeners = () => {
  document.addEventListener('keydown', onPhotoKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
};

const photoRemoveListeners = () => {
  document.removeEventListener('keydown', onPhotoKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
};

const openPhotoModal = (photo) => {
  renderPhoto(photo);

  showElement(photoElement);
  hideElement(commentsLoaderElement);
  hideElement(commentsCountElement);
  document.body.classList.add('modal-open');

  photoAddListeners();
};

function closePhoto() {
  hideElement(photoElement);
  document.body.classList.remove('modal-open');

  photoRemoveListeners();
}

export { openPhotoModal };
