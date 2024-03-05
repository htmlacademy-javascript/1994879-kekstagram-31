const template = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

const fillThumbnail = (thumbnail, { url, description, likes , comments }) => {
  const img = thumbnail.querySelector('.picture__img');
  img.src = url;
  img.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes.toString();
  thumbnail.querySelector('.picture__comments').textContent = comments.length.toString();
  return thumbnail;
};

const renderThumbnails = (photos) => {
  const documentFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = fillThumbnail(template.cloneNode(true), photo);
    documentFragment.append(thumbnail);
  });

  picturesContainer.append(documentFragment);
};

export { renderThumbnails };
