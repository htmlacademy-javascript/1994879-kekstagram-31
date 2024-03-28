import { bodyAppendElement, isEscapeKey } from './util';
import { templateDataErrorElement, templateErrorElement, templateSuccessElement, SUCCESS_BUTTON_CLASS, ERROR_BUTTON_CLASS } from './selectors-key';

const MESSAGE_TIMEOUT = 5000;

const showMessage = (templateElement, buttonClass) => {
  const messageElement = bodyAppendElement(templateElement);
  const buttonElement = messageElement.querySelector(buttonClass);

  const onMessageKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
      hideMessage();
    }
  };

  const onMessageButtonClick = () => hideMessage();
  const onMessageSectionClick = (evt) => {
    if (evt.target === messageElement) {
      evt.stopPropagation();
      hideMessage();
    }
  };

  const addListeners = () => {
    document.body.addEventListener('keydown', onMessageKeydown);
    buttonElement.addEventListener('click', onMessageButtonClick);
    messageElement.addEventListener('click', onMessageSectionClick);
  };

  const removeListeners = () => {
    document.body.removeEventListener('keydown', onMessageKeydown);
    buttonElement.removeEventListener('click', onMessageButtonClick);
    messageElement.removeEventListener('click', onMessageSectionClick);
  };

  function hideMessage() {
    removeListeners();
    messageElement.remove();
  }

  addListeners();
};

const showSuccessMessage = () => showMessage(templateSuccessElement, SUCCESS_BUTTON_CLASS);
const showErrorMessage = () => showMessage(templateErrorElement, ERROR_BUTTON_CLASS);

const showErrorAlert = () => {
  const element = bodyAppendElement(templateDataErrorElement);
  setTimeout(() => element.remove(), MESSAGE_TIMEOUT);
};

export { showErrorAlert, showSuccessMessage, showErrorMessage };
