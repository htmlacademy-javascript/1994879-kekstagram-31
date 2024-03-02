const getRandomInRange = ({min, max}) => Math.round(Math.random() * (max - min) + min);
const getRandomElement = (elements) => elements[getRandomInRange({ min: 0, max: elements.length - 1})];

const createIdCounter = () => {
  let lastId = 0;

  return () => {
    lastId += 1;
    return lastId;
  };
};

export { getRandomInRange, getRandomElement, createIdCounter };
