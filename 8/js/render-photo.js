import { isEscapeKey, hideElement, showElement } from './util';
import { findPhoto } from './gallary';
import { renderComments } from './render-comments';
import { bigPicture, photoImg, photoLikes, photoDescription, commentsCount, commentsLoader, commentsTotal, commentsShow, cancelButton } from './selectors-key';

const COMMENTS_SHOW_COUNT = 2;

const onPhotoKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

const closePhoto = () => {
  hideElement(bigPicture);
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPhotoKeydown);
};

const openPhotoModal = ({url, description, likes , comments }) => {
  photoImg.src = url;
  photoImg.alt = description;
  photoLikes.textContent = likes.toString();
  photoDescription.textContent = description;

  renderComments(comments);

  commentsShow.textContent = COMMENTS_SHOW_COUNT.toString();
  commentsTotal.textContent = comments.length.toString();

  showElement(bigPicture);
  hideElement(commentsLoader);
  hideElement(commentsCount);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPhotoKeydown);
};

const renderPhoto = (id) => {
  const photo = findPhoto(+id);
  if (photo) {
    openPhotoModal(photo);
  }
};

const onCancelButtonClick = () => closePhoto();
cancelButton.addEventListener('click', onCancelButtonClick);

export { renderPhoto };
