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
  const responce = await fetch(url, { method, body });
  if (!responce.ok) {
    throw new Error(responce.status);
  }
  return responce.json();
};

const loadPhotos = async () => await request(BASE_URL + Route.GET);
const sendPhoto = async (body) => await request(BASE_URL + Route.POST, Method.POST, body);

export {loadPhotos, sendPhoto};
