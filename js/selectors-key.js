const templateElement = document.querySelector('#picture').content;
const templateImgElement = templateElement.querySelector('.picture__img');
const templateLikesElement = templateElement.querySelector('.picture__likes');
const templateCommentsElement = templateElement.querySelector('.picture__comments');

const picturesContainerElement = document.querySelector('.pictures');

const photoElement = document.querySelector('.big-picture');
const photoImgElement = photoElement.querySelector('.big-picture__img img');
const photoLikesElement = photoElement.querySelector('.likes-count');
const photoDescriptionElement = photoElement.querySelector('.social__caption');
const commentsShowElement = photoElement.querySelector('.social__comment-shown-count');
const commentsTotalElement = photoElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = photoElement.querySelector('.comments-loader');
const commentsCountElement = photoElement.querySelector('.social__comment-count');
const commentsContainerElement = photoElement.querySelector('.social__comments');

const cancelButtonElement = photoElement.querySelector('#picture-cancel');

export { templateElement, picturesContainerElement, templateImgElement, templateLikesElement, templateCommentsElement };
export { photoElement, photoImgElement, photoLikesElement, photoDescriptionElement, cancelButtonElement };
export { commentsContainerElement, commentsCountElement, commentsLoaderElement, commentsTotalElement, commentsShowElement};
