const template = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');
const templateImg = template.querySelector('.picture__img');
const templateLikes = template.querySelector('.picture__likes');
const templateComments = template.querySelector('.picture__comments');

const getThumbnail = ({ url, description, likes , comments }) => {
  templateImg.src = url;
  templateImg.alt = description;
  templateLikes.textContent = likes.toString();
  templateComments.textContent = comments.length.toString();
  return template.cloneNode(true);
};

const renderThumbnails = (photos) => {
  const documentFragment = document.createDocumentFragment();

  photos.forEach((photo) => documentFragment.append(getThumbnail(photo)));
  
  picturesContainer.append(documentFragment);
};

export { renderThumbnails };
