const SUCCESS_BUTTON_CLASS = '.success__button';
const ERROR_BUTTON_CLASS = '.error__button';

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

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadInputElement = uploadFormElement.querySelector('.img-upload__input');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadCancelButtonElement = uploadFormElement.querySelector('.img-upload__cancel');
const uploadPreviewImgElement = uploadFormElement.querySelector('.img-upload__preview img');
const submitButtonElement = uploadFormElement.querySelector('#upload-submit');

const textHashtagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');

const scaleSmallerElement = document.querySelector('.scale__control--smaller');
const scaleBiggerElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');

const effectLevelValueElement = document.querySelector('.effect-level__value');
const effectSliderElement = document.querySelector('.effect-level__slider');
const effectListElement = document.querySelector('.effects__list');
const effectLevelContainerElement = document.querySelector('.img-upload__effect-level');

const templateDataErrorElement = document.querySelector('#data-error').content.querySelector('.data-error');
const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');

export { templateElement, picturesContainerElement, templateImgElement, templateLikesElement, templateCommentsElement };
export { photoElement, photoImgElement, photoLikesElement, photoDescriptionElement, cancelButtonElement, submitButtonElement };
export { commentsContainerElement, commentsCountElement, commentsLoaderElement, commentsTotalElement, commentsShowElement};
export { uploadFormElement, uploadInputElement, uploadOverlayElement, uploadCancelButtonElement, uploadPreviewImgElement };
export { textHashtagsElement, textDescriptionElement };
export { scaleSmallerElement, scaleBiggerElement, scaleValueElement };
export { effectLevelValueElement, effectSliderElement, effectListElement, effectLevelContainerElement };
export { templateDataErrorElement, templateErrorElement, templateSuccessElement, SUCCESS_BUTTON_CLASS, ERROR_BUTTON_CLASS };
