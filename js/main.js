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

const PHOTOS_LIMIT = 25;
const PHOTO_ID_LIMIT = 25;
const LIKES_LIMIT = 200;
const LIKES_START = 15;
const COMMENTS_LIMIT = 30;
const COMMENTS_START = 0;
const COMMENT_ID_LIMIT = 100;
const PHRASES_LIMIT = 2;
const AVATARS_LIMIT = 6;
const AVATARS_START = 0;
const DEFAULT_START = 1;

const getRandomInRange = (min, max) => Math.round(Math.random() * (max - min) + min);

const getRandomInArray = (array, count = 1) => {
  const result = [];
  const limit = getRandomInRange(DEFAULT_START, count);
  for (let i = 0; i < limit; i++) {
    result.push(array[getRandomInRange(0, array.length - 1)]);
  }
  return result.join('\n');
};

const createIdInRange = (min, max) => {
  const existingIds = [];

  return () => {
    if (existingIds.length >= (max - min + 1)) {
      return null;
    }
    let id = getRandomInRange(min, max);
    while (existingIds.includes(id)) {
      id = getRandomInRange(min, max);
    }
    existingIds.push(id);
    return id;
  };
};

const generateCommentId = createIdInRange(DEFAULT_START, COMMENT_ID_LIMIT);
const generatePhotId = createIdInRange(DEFAULT_START, PHOTO_ID_LIMIT);

const newComment = () => {
  const comment = {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInRange(AVATARS_START, AVATARS_LIMIT)}.svg`,
    message: getRandomInArray(DEFAULT_MESSAGES, PHRASES_LIMIT),
    name: getRandomInArray(DEFAULT_AUTHORS),
  };
  return comment;
};

const newPhoto = () => {
  const id = generatePhotId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomInArray(DEFAULT_PHOTO_DESCRIPTIONS, DEFAULT_PHOTO_DESCRIPTIONS.length),
    likes: getRandomInRange(LIKES_START, LIKES_LIMIT),
    comments: Array.from({ length: getRandomInRange(COMMENTS_START, COMMENTS_LIMIT) }, newComment),
  };
};

const generatePhoto = (count) => Array.from({ length: count }, newPhoto);
generatePhoto(PHOTOS_LIMIT);
