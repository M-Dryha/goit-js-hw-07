import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a>`;
}

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
 galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryMarkup);


var lightbox = new SimpleLightbox('.gallery a',
    {
        captions: true,
        captionsData: 'alt',
        cationDelay: '250ms',
    });

