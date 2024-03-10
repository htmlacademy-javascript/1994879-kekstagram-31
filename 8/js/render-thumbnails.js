import { renderPhoto } from './render-photo';
import { template, picturesContainer, templateImg, templateLikes, templateComments } from './selectors-key';
import { renderArray } from './util';

const getThumbnail = ({ id, url, description, likes , comments }) => {
  templateImg.id = id;
  templateImg.src = url;
  templateImg.alt = description;
  templateLikes.textContent = likes.toString();
  templateComments.textContent = comments.length.toString();
  return template.cloneNode(true);
};

const renderThumbnails = (photos) => renderArray(photos, getThumbnail, picturesContainer);

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    renderPhoto(evt.target.id);
  }
});

export { renderThumbnails };
