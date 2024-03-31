import { imageFiltersElement } from './selectors-key';
import { renderThumbnails } from './render-thumbnails';
import { debounce } from './util';

const DEBOUNCE_TIMEOUT = 500;
const FILTER_RANDOM_COUNT = 10;
const FILTERS_BUTTON_CLASS = 'img-filters__button';
const FILTERS_BUTTON_ACTIVE = 'img-filters__button--active';
const FILTERS_INACTIVE = 'img-filters--inactive';

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const FilterButtons = {};
let thumbnails = [];
let currentFilter;

const sortRandom = () => 0.5 - Math.random();
const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const getFilteredPhoto = () => {
  const photos = thumbnails.slice();
  switch (currentFilter) {
    case Filters.RANDOM:
      return photos.sort(sortRandom).slice(0, FILTER_RANDOM_COUNT);
    case Filters.DISCUSSED:
      return photos.sort(sortByComments);
    default:
      return photos;
  }
};

const debouncedRenderThumbnails = debounce(renderThumbnails, DEBOUNCE_TIMEOUT);

const selectFilter = (filter) => {
  FilterButtons[currentFilter].classList.remove(FILTERS_BUTTON_ACTIVE);
  FilterButtons[filter].classList.add(FILTERS_BUTTON_ACTIVE);
  currentFilter = filter;

  debouncedRenderThumbnails(getFilteredPhoto());
};

const onFiltersClick = (evt) => {
  const element = evt.target;
  if (element.classList.contains(FILTERS_BUTTON_CLASS)) {
    selectFilter(element.id);
  }
};

const initFilters = (photos) => {
  thumbnails = photos;
  Object.values(Filters).forEach((value) => (FilterButtons[value] = imageFiltersElement.querySelector(`#${value}`)));
  currentFilter = Object.values(FilterButtons).find((element) => element.classList.contains(FILTERS_BUTTON_ACTIVE)).id;

  renderThumbnails(getFilteredPhoto());
  imageFiltersElement.classList.remove(FILTERS_INACTIVE);
  imageFiltersElement.addEventListener('click', onFiltersClick);
};

export { initFilters };
