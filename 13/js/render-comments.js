import { commentsContainerElement } from './selectors-key';
import { renderElements, newElement } from './util';

const getComment = ({ avatar, name, message }) => {
  const li = newElement('li', 'social__comment');
  const img = newElement('img', 'social__picture');
  const p = newElement('p', 'social__text');
  img.size = 35;
  img.height = 35;
  img.src = avatar;
  img.alt = name;
  p.textContent = message;

  li.append(img);
  li.append(p);
  return li;
};

const clearComments = () => (commentsContainerElement.innerText = '');

const renderComments = (comments) => {
  renderElements(comments, getComment, commentsContainerElement);
};

export { renderComments, clearComments };
