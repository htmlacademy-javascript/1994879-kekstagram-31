import { initGallary } from './gallary.js';
import { renderThumbnails } from './render-thumbnails';
import { formUpload } from './form-upload.js';

const PHOTOS_LIMIT = 25;

const photos = initGallary(PHOTOS_LIMIT);
renderThumbnails(photos);
formUpload();
