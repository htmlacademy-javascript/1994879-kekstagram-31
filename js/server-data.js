const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET: '/data',
  POST: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const request = async (url, method = Method.GET, body = null) => {
  const response = await fetch(url, { method, body });
  if (!response.ok) {
    throw new Error(`Ошибка запроса, код = ${response.status}`);
  }
  return response.json();
};

const loadPhotos = async () => await request(BASE_URL + Route.GET);
const sendPhoto = async (body) => await request(BASE_URL + Route.POST, Method.POST, body);

export { loadPhotos, sendPhoto };
