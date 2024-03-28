import { commentsContainerElement } from './selectors-key';
import { renderElements, newElement } from './util';

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;
const SOCIAL_COMMENT_CLASS = 'social__comment';
const SOCIAL_PICTURE_CLASS = 'social__picture';
const SOCIAL_TEXT_CLASS = 'social__text';

const getComment = ({ avatar, name, message }) => {
  const li = newElement('li', SOCIAL_COMMENT_CLASS);
  const img = newElement('img', SOCIAL_PICTURE_CLASS);
  const p = newElement('p', SOCIAL_TEXT_CLASS);
  img.width = AVATAR_WIDTH;
  img.height = AVATAR_HEIGHT;
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
