import { onScaleSmallerClick, onScaleBiggerClick, scaleDefault } from './scale-photo';
import { uploadFormElement, uploadInputElement, uploadOverlayElement, uploadCancelButtonElement, textHashtagElement, textDescriptionElement } from './selectors-key';
import { scaleSmallerElement, scaleBiggerElement, effectListElement } from './selectors-key';
import { closeModalElement, openModalElement, isEscapeKey } from './util';
import { validateHahstagsCount, validateHahstagsFormat, validateHahstagsUnique, validateComments, ErrorValidation } from './validation';
import { onEffectListClick, createEffectSlider, resetEffect } from './effect-photo';

const isTextElementFocused = () => document.activeElement === textHashtagElement || document.activeElement === textDescriptionElement;

const onUploadKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextElementFocused()) {
    evt.preventDefault();
    closeUpload();
  }
};

const onUploadCancelClick = () => closeUpload();

const uploadAddListeners = () => {
  uploadCancelButtonElement.addEventListener('click', onUploadCancelClick);
  document.addEventListener('keydown', onUploadKeydown);
  scaleSmallerElement.addEventListener('click', onScaleSmallerClick);
  scaleBiggerElement.addEventListener('click', onScaleBiggerClick);
  effectListElement.addEventListener('click', onEffectListClick);
};

const uploadRemoveListeners = () => {
  uploadCancelButtonElement.removeEventListener('click', onUploadCancelClick);
  document.removeEventListener('keydown', onUploadKeydown);
  scaleSmallerElement.removeEventListener('click', onScaleSmallerClick);
  scaleBiggerElement.removeEventListener('click', onScaleBiggerClick);
  effectListElement.removeEventListener('click', onEffectListClick);
};

const openUpload = () => {
  openModalElement(uploadOverlayElement);
  uploadAddListeners();
  scaleDefault();
  resetEffect();
};

const onUploadInputChange = (evt) => {
  evt.preventDefault();
  openUpload(evt.target.files[0]);
};

const formUpload = () => {
  const pristineConfig = {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
    errorTextTag: 'div',
  };

  const pristine = new Pristine(uploadFormElement, pristineConfig, true);
  pristine.addValidator(textHashtagElement, validateHahstagsCount, ErrorValidation.HASHTAG_COUNT);
  pristine.addValidator(textHashtagElement, validateHahstagsFormat, ErrorValidation.HASHTAG_FORMAT);
  pristine.addValidator(textHashtagElement, validateHahstagsUnique, ErrorValidation.HASHTAG_UNIQUE);
  pristine.addValidator(textDescriptionElement, validateComments, ErrorValidation.COMMENT_LIMIT);

  createEffectSlider();

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      closeUpload();
    }
  };

  uploadFormElement.addEventListener('submit', onSubmitForm);
  uploadInputElement.addEventListener('change', onUploadInputChange);
};

function closeUpload() {
  closeModalElement(uploadOverlayElement);
  uploadRemoveListeners();
}

export { formUpload };
