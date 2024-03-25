import { initGallary } from './gallary.js';
import { renderThumbnails } from './render-thumbnails';
import { formUpload } from './form-upload.js';

const start = async () => {
  const photos = await initGallary();
  renderThumbnails(photos);
  formUpload();
};

start();
