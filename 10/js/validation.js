const HASHTAGS_LIMIT = 5;
const HASHTAGS_SEPARATOR = ' ';
const hashtagFormat = /^#[a-za-яë0-9]{1,19}$/i;
const CommentValidationRange = { MIN: 0, MAX: 140};

const ErrorValidation = {
  COMMENT_LIMIT: 'Длина комментария не может составлять больше 140 символов.',
  HASHTAG_COUNT: 'Нельзя указать больше пяти хэштегов.',
  HASHTAG_FORMAT: 'Хэштег - начинается с #, затем буквы или цифры,не более 20 символов, спецсимволы запрещены.',
  HASHTAG_UNIQUE: 'Один и тот же хэштег не может быть использован дважды.',
};

const normalizeHashtags = (tagString) => tagString.trim().toLowerCase().split(HASHTAGS_SEPARATOR).filter((tag) => Boolean(tag.length));

const validateHahstagsCount = (value) => normalizeHashtags(value).length <= HASHTAGS_LIMIT;

const validateHahstagsFormat = (value) => normalizeHashtags(value).every((tag) => hashtagFormat.test(tag));

const validateHahstagsUniqueCount = (value) => {
  const tags = normalizeHashtags(value);
  return tags.length === new Set(tags).size;
};

const validateComments = (value) => value.length >= CommentValidationRange.MIN && value.length <= CommentValidationRange.MAX;

export { validateHahstagsCount, validateHahstagsFormat, validateHahstagsUniqueCount, validateComments, ErrorValidation };
