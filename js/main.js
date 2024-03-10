import { initGallary } from './gallary.js';
import { renderThumbnails } from './render-thumbnails';
import { PHOTOS_LIMIT } from './config.js';

const photos = initGallary(PHOTOS_LIMIT);
renderThumbnails(photos);
