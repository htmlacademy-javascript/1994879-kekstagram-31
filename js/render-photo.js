import { isEscapeKey, openModalElement, closeModalElement, toggleVisibilityElement } from './util';
import { renderPartComments, isAllCommentsRendered } from './gallary';
import { photoElement, photoImgElement, photoLikesElement, photoDescriptionElement, commentsLoaderElement, commentsTotalElement,
  commentsShowElement, cancelButtonElement } from './selectors-key';
import { clearComments } from './render-comments';

const renderPhoto = ({url, description, likes, comments }) => {
  photoImgElement.src = url;
  photoImgElement.alt = description;
  photoLikesElement.textContent = likes.toString();
  photoDescriptionElement.textContent = description;

  commentsTotalElement.textContent = comments.length.toString();
};

const onPhotoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const onCancelButtonClick = () => closePhoto();

const loadComments = () => {
  commentsShowElement.textContent = renderPartComments();
  toggleVisibilityElement(isAllCommentsRendered(), commentsLoaderElement);
};

const onCommentsLoaderClick = () => loadComments();

const photoAddListeners = () => {
  document.addEventListener('keydown', onPhotoKeydown);
  cancelButtonElement.addEventListener('click', onCancelButtonClick);
  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
};

const photoRemoveListeners = () => {
  document.removeEventListener('keydown', onPhotoKeydown);
  cancelButtonElement.removeEventListener('click', onCancelButtonClick);
  commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
};

const openPhotoModal = (photo) => {
  renderPhoto(photo);
  openModalElement(photoElement);

  clearComments();
  loadComments();
  photoAddListeners();
};

function closePhoto() {
  closeModalElement(photoElement);
  photoRemoveListeners();
}

export { openPhotoModal };
