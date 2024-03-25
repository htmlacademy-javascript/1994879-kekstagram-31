import { uploadPreviewImgElement, effectSliderElement, effectLevelValueElement, effectLevelContainerElement } from './selectors-key';
import { isEffectElement, toggleVisibilityElement } from './util';

const DEFAULT_EFFECT = 'none';

const sliderOptions = {
  range: { min: 0, max: 1, },
  start: 1,
  step: 0.1,
  connect: 'lower',
};

const effectsConfig = {
  none: {
    slider: {...sliderOptions},
    filter: () => '',
  },
  chrome: {
    slider: {...sliderOptions},
    filter: (value) => `grayscale(${value})`,
  },
  sepia: {
    slider: {...sliderOptions},
    filter: (value) => `sepia(${value})`,
  },
  marvin: {
    slider: {
      range: { min: 0, max: 100, },
      start: 100,
      step: 1,
    },
    filter: (value) => `invert(${value}%)`,
  },
  phobos: {
    slider: {
      range: { min: 0, max: 3, },
      start: 3,
      step: 0.1,
    },
    filter: (value) => `blur(${value}px)`,
  },
  heat: {
    slider: {
      range: { min: 1, max: 3, },
      start: 3,
      step: 0.1,
    },
    filter: (value) => `brightness(${value})`,
  },
};

let currentEffect = DEFAULT_EFFECT;

const selectEffect = (key) => {
  currentEffect = key;
  const { slider } = effectsConfig[currentEffect];
  effectSliderElement.noUiSlider.updateOptions(slider);

  toggleVisibilityElement((currentEffect === DEFAULT_EFFECT), effectLevelContainerElement);
};

const onEffectListClick = (evt) => {
  if (isEffectElement(evt)) {
    evt.preventDefault();
    selectEffect(evt.target.value);
  }
};

const onUpdateEffectSlider = () => {
  effectLevelValueElement.value = effectSliderElement.noUiSlider.get();
  const { filter } = effectsConfig[currentEffect];
  uploadPreviewImgElement.style.filter = filter(effectLevelValueElement.value);
};

const createEffectSlider = () => {
  noUiSlider.create(effectSliderElement, sliderOptions);
  effectSliderElement.noUiSlider.on('update', onUpdateEffectSlider);
};

const resetEffect = () => selectEffect(DEFAULT_EFFECT);

export { resetEffect, onEffectListClick, createEffectSlider };
