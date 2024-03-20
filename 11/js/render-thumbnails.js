import { templateElement, picturesContainerElement, templateImgElement, templateLikesElement, templateCommentsElement } from './selectors-key';
import { renderElements } from './util';
import { showPhotoById } from './gallary';

const THUMBNAIL_KEY = 'thumbnail';

const getThumbnail = ({ id, url, description, likes , comments }) => {
  templateImgElement.dataset.id = id;
  templateImgElement.dataset.key = THUMBNAIL_KEY;
  templateImgElement.src = url;
  templateImgElement.alt = description;
  templateLikesElement.textContent = likes.toString();
  templateCommentsElement.textContent = comments.length.toString();
  return templateElement.cloneNode(true);
};

const onPicturesContainerElementClick = (evt) => {
  if (evt.target.dataset.key === THUMBNAIL_KEY) {
    showPhotoById(Number(evt.target.dataset.id));
  }
};

const renderThumbnails = (photos) => {
  renderElements(photos, getThumbnail, picturesContainerElement);
  picturesContainerElement.addEventListener('click', onPicturesContainerElementClick);
};

export { renderThumbnails };
