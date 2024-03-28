const HIDDEN_CLASS = 'hidden';

const getRandomInRange = (min, max) => Math.round(Math.random() * (max - min) + min);
const getRandomElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];

const createIdCounter = () => {
  let lastId = 0;

  return () => {
    lastId += 1;
    return lastId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEffectElement = (evt) => evt.target?.name === 'effect';

const hideElement = (element) => element.classList.add(HIDDEN_CLASS);
const showElement = (element) => element.classList.remove(HIDDEN_CLASS);
const toggleVisibilityElement = (condition, element) => condition ? hideElement(element) : showElement(element);

const openModalElement = (element) => {
  showElement(element);
  document.body.classList.add('modal-open');
};

const closeModalElement = (element) => {
  hideElement(element);
  document.body.classList.remove('modal-open');
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

export { getRandomInRange, getRandomElement, createIdCounter, isEscapeKey, isEffectElement, hideElement, showElement };
export { toggleVisibilityElement, renderElements, newElement, bodyAppendElement };
export { openModalElement, closeModalElement };
export { debounce };
