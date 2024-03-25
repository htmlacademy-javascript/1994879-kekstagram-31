import { onScaleSmallerClick, onScaleBiggerClick, scaleDefault } from './scale-photo';
import { uploadFormElement, uploadInputElement, uploadOverlayElement, uploadCancelButtonElement, submitButtonElement, textHashtagsElement, textDescriptionElement } from './selectors-key';
import { scaleSmallerElement, scaleBiggerElement, effectListElement, uploadPreviewImgElement } from './selectors-key';
import { closeModalElement, openModalElement, isEscapeKey } from './util';
import { validateHahstagsCount, validateHahstagsFormat, validateHahstagsUnique, validateComments, ErrorValidation } from './validation';
import { onEffectListClick, createEffectSlider, resetEffect } from './effect-photo';
import { sendData } from './server-data';
import { showSuccessMessage, showErrorMessage } from './messages';

const SubmitButtonText = {
  SENDING: 'Отправляется...',
  IDLE: 'Опубликовать',
};

const isTextElementFocused = () => document.activeElement === textHashtagsElement || document.activeElement === textDescriptionElement;

const onUploadKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextElementFocused()) {
    evt.stopPropagation();
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

const setPreviewImage = (file) => {
  uploadPreviewImgElement.src = URL.createObjectURL(file);
  uploadPreviewImgElement.alt = file.name;
};

const resetForm = () => {
  scaleDefault();
  resetEffect();
  textHashtagsElement.value = '';
  textDescriptionElement.value = '';
  uploadInputElement.value = '';
};

const openUpload = (file) => {
  setPreviewImage(file);
  openModalElement(uploadOverlayElement);
  uploadAddListeners();
};

const onUploadInputChange = (evt) => {
  evt.preventDefault();
  openUpload(evt.target.files[0]);
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const sendForm = async (data) => {
  const formData = new FormData(data);
  const response = await sendData(formData);
  if (response) {
    showSuccessMessage();
    closeUpload();
  } else {
    showErrorMessage();
  }
};

const formUpload = () => {
  const pristineConfig = {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper--error',
    errorTextTag: 'div',
  };

  const pristine = new Pristine(uploadFormElement, pristineConfig, true);
  pristine.addValidator(textHashtagsElement, validateHahstagsCount, ErrorValidation.HASHTAG_COUNT);
  pristine.addValidator(textHashtagsElement, validateHahstagsFormat, ErrorValidation.HASHTAG_FORMAT);
  pristine.addValidator(textHashtagsElement, validateHahstagsUnique, ErrorValidation.HASHTAG_UNIQUE);
  pristine.addValidator(textDescriptionElement, validateComments, ErrorValidation.COMMENT_LIMIT);

  createEffectSlider();
  resetForm();

  const onSubmitForm = async (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      await sendForm(evt.target);
      unblockSubmitButton();
    }
  };

  uploadFormElement.addEventListener('submit', onSubmitForm);
  uploadInputElement.addEventListener('change', onUploadInputChange);
};

function closeUpload() {
  closeModalElement(uploadOverlayElement);
  uploadRemoveListeners();
  resetForm();
}

export { formUpload };
