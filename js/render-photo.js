import { isEscapeKey, hideElement, showElement } from './util';
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
  if (isAllCommentsRendered()) {
    hideElement(commentsLoaderElement);  
  }
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
  showElement(photoElement);
  showElement(commentsLoaderElement);
  document.body.classList.add('modal-open');

  clearComments();
  loadComments();
  photoAddListeners();
};

function closePhoto() {
  hideElement(photoElement);
  document.body.classList.remove('modal-open');

  photoRemoveListeners();
}

export { openPhotoModal };
