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
const isEnterKey = (evt) => evt.key === 'Enter';

const hideElement = (element) => element.classList.add('hidden');
const showElement = (element) => element.classList.remove('hidden');

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

export { getRandomInRange, getRandomElement, createIdCounter, isEscapeKey, isEnterKey, hideElement, showElement, renderElements, newElement };
