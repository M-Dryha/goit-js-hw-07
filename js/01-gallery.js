import { galleryItems } from './gallery-items.js';

 
const galleryContainer = document.querySelector("div.gallery");


const makeGalleryItemMarkup = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
  <img
  class="gallery__image"
   src="${preview}"
  data-source='${original}'
   alt="${description}"
  />
 </a>
</div>`;
}

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
 galleryContainer.insertAdjacentHTML('afterbegin', makeGalleryMarkup);

let instance;


galleryContainer.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const modalIMG = event.target.dataset.source;
  event.target.src = modalIMG ;
  

  openModal(modalIMG);
}

function openModal(src) {


 instance = basicLightbox.create(`
   <img src="${src}" width: 1200/>`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeModal);
               
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModal);
 
      },
    },
  );
  instance.show();

}
 


const closeModal = (event) => {

   const containerIMG = document.querySelector('.modal');
  console.log(event)
  
  if (event.code === 'Escape' || event.target.nodeName === 'IMG') {
    instance.close();
  }
 
}













































































