const template = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');
const templateImg = template.querySelector('.picture__img');
const templateLikes = template.querySelector('.picture__likes');
const templateComments = template.querySelector('.picture__comments');

const bigPicture = document.querySelector('.big-picture');
const photoImg = bigPicture.querySelector('.big-picture__img img');
const photoLikes = bigPicture.querySelector('.likes-count');
const commentsShow = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotal = bigPicture.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsContainer = bigPicture.querySelector('.social__comments');
const photoDescription = bigPicture.querySelector('.social__caption');

const cancelButton = bigPicture.querySelector('#picture-cancel');

export { template, picturesContainer, templateImg, templateLikes, templateComments };
export { bigPicture, photoImg, photoLikes, photoDescription, cancelButton };
export { commentsContainer, commentsCount, commentsLoader, commentsTotal, commentsShow};
