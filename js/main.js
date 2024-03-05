import { generatePhoto } from './data.js';
import { renderThumbnails } from './render-thumbnails.js';

const PHOTOS_LIMIT = 25;
renderThumbnails(generatePhoto(PHOTOS_LIMIT));
