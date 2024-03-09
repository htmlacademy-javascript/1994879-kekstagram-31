import { createIdCounter, getRandomInRange, getRandomElement } from './util.js';

const DEFAULT_AUTHORS = [
  'Андрей Захарченко',
  'Оксана Стургирева',
  'Светлана Дьяченко',
  'Alexey Maleykov',
  'Александр Сударев',
  'Евгений Лепёшкин',
  'Николай Шабалин',
];

const DEFAULT_MESSAGES = [
  'Всё отлично!',
  'Вцелом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DEFAULT_PHOTO_DESCRIPTIONS = [
  'Описание фото.',
  'Тут могла быть ваша реклама, а пока просто фото.',
  'Самое удачное фото.',
];

const LikesRange = { MIN: 15, MAX: 200 };
const CommentsRange = { MIN: 0, MAX: 30 };
const AvatarsRange = { MIN: 1, MAX: 6 };

const generateCommentId = createIdCounter();
const generatePhotId = createIdCounter();

const newComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInRange(AvatarsRange.MIN, AvatarsRange.MAX)}.svg`,
  message: getRandomElement(DEFAULT_MESSAGES),
  name: getRandomElement(DEFAULT_AUTHORS),
});

const newPhoto = () => {
  const id = generatePhotId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DEFAULT_PHOTO_DESCRIPTIONS),
    likes: getRandomInRange(LikesRange.MIN, LikesRange.MAX),
    comments: Array.from({ length: getRandomInRange(CommentsRange.MIN, CommentsRange.MAX) }, newComment),
  };
};

const generatePhoto = (count) => Array.from({ length: count }, newPhoto);

export { generatePhoto };
