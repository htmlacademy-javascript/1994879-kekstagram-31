import { showErrorAlert } from './messages';

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
  try {
    const responce = await fetch(url, { method, body });
    if (responce.ok) {
      return responce.json();
    }
  } catch(error) {
    showErrorAlert(error);
  }
};

const getData = async () => await request(BASE_URL + Route.GET);
const sendData = async (body) => await request(BASE_URL + Route.POST, Method.POST, body);

export {getData, sendData};
