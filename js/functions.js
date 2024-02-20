const checkLimit = (string, limit) => (string.legth <= limit);

const isPalindron = (value) => {
  const string = String(value).replaceAll(' ', '').toUpperCase();

  for (let i = 0; i < Math.ceil(string.length / 2); i++) {
    if (string.at(i) !== string.at(-1 - i)) {
      return false;
    }
  }
  return true;
};

const extractNumbers = (value) => {
  let result = '';
  const string = String(value).replaceAll(' ', '');
  for (let i = 0; i < string.length; i++) {
    result += (Number.isInteger(+string.at(i))) ? string.at(i) : '';
  }
  return result.length > 0 ? +result : NaN;
};

checkLimit('проверяемая строка', 10);
isPalindron('Лёша на полке клопа нашёл ');
extractNumbers(1.5);
