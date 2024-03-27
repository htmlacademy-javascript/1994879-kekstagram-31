import { onScaleSmallerClick, onScaleBiggerClick, scaleDefault } from './scale-photo';
import { uploadFormElement, uploadInputElement, uploadOverlayElement, uploadCancelButtonElement, submitButtonElement, textHashtagsElement, textDescriptionElement } from './selectors-key';
import { scaleSmallerElement, scaleBiggerElement, effectListElement, effectPreviewElements, uploadPreviewImgElement } from './selectors-key';
import { closeModalElement, openModalElement, isEscapeKey } from './util';
import { createValidator, resetValidator, isValidationPass } from './validation';
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
  const url = URL.createObjectURL(file);
  uploadPreviewImgElement.src = url;
  uploadPreviewImgElement.alt = file.name;
  effectPreviewElements.forEach((previewElement) => {
    previewElement.style.background = `url(${url}) center no-repeat`;
    previewElement.style.backgroundSize = '100% auto';
  });
};

const resetForm = () => {
  resetValidator();
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

const onSubmitForm = async (evt) => {
  evt.preventDefault();
  if (isValidationPass()) {
    blockSubmitButton();
    await sendForm(evt.target);
    unblockSubmitButton();
  }
};

const formUpload = () => {
  createValidator();
  createEffectSlider();
  resetForm();

  uploadFormElement.addEventListener('submit', onSubmitForm);
  uploadInputElement.addEventListener('change', onUploadInputChange);
};

function closeUpload() {
  closeModalElement(uploadOverlayElement);
  uploadRemoveListeners();
  resetForm();
}

export { formUpload };
