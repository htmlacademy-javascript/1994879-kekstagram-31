const HIDDEN_CLASS = 'hidden';
const MODAL_CLASS = 'modal-open';

const isEscapeKey = (evt) => evt.key === 'Escape';

const hideElement = (element) => element.classList.add(HIDDEN_CLASS);
const showElement = (element) => element.classList.remove(HIDDEN_CLASS);
const toggleVisibilityElement = (condition, element) => condition ? hideElement(element) : showElement(element);

const openModal = (element) => {
  showElement(element);
  document.body.classList.add(MODAL_CLASS);
};

const closeModal = (element) => {
  hideElement(element);
  document.body.classList.remove(MODAL_CLASS);
};

const renderElements = (elements, makeRender, container) => {
  const documentFragment = document.createDocumentFragment();
  elements.forEach((element) => documentFragment.append(makeRender(element)));
  container.append(documentFragment);
};

const newElement = (tag, className) => {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
};

const bodyAppendElement = (templateElement) => {
  const element = templateElement.cloneNode(true);
  document.body.append(element);
  return element;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, hideElement, showElement, openModal, closeModal };
export { toggleVisibilityElement, renderElements, newElement, bodyAppendElement };
export { debounce };
