// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from '../../node_modules/simplelightbox/dist/simple-lightbox.esm';
import '../../node_modules/simplelightbox/dist/simple-lightbox.min.css';



const galleryRef = document.querySelector('.gallery');

const createGalleryItemsMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item" style="list-style-type: none;">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map(item => createGalleryItemsMarkup(item))
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

const images = galleryRef.querySelectorAll('.gallery__image');
images.forEach(image => {
  const altText = image.getAttribute('alt');
  image.setAttribute('title', altText);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
});