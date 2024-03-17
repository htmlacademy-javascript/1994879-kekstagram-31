import { uploadFormElement, uploadInputElement, uploadOverlayElement, uploadCancelButtonElement, textHashtagElement, textDescriptionElement } from './selectors-key';
import { closeModalElement, openModalElement, isEscapeKey } from './util';
import { validateHahstagsCount, validateHahstagsFormat, validateHahstagsUnique, validateComments, ErrorValidation } from './validation';

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
};

const uploadRemoveListeners = () => {
  uploadCancelButtonElement.removeEventListener('click', onUploadCancelClick);
  document.removeEventListener('keydown', onUploadKeydown);
};

const openUpload = () => {
  openModalElement(uploadOverlayElement);
  uploadAddListeners();
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
