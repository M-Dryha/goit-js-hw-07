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




galleryContainer.addEventListener('click', onClick);

function onClick(event) {

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  event.target.src = event.target.dataset.source;
  event.preventDefault();

  openModal( event.target.dataset.source);
}

function openModal(src) {
  const instance = basicLightbox.create(`
    <div class="modal">
         <img src="${src}" width="1200" height="800"/>
    </div>
`)

instance.show()
}






// const createList = galleryItems.map(item => {
  
//   let createListItem = document.createElement('li');
//   createListItem = `<div class="gallery__item">
//   <a class="gallery__link" href='${item.original}'>
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source='${item.original}'
//       alt="${item.description}"
//     />
//   </a>
// </div>`;
        
//   galleryContainer.insertAdjacentHTML('afterbegin', createListItem);
//   console.log(galleryContainer);
      
// }).join('');







// const createList = galleryItems.map(item => {
  
//          let createListItem = document.createElement('li');
//     createListItem = `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${item.original}"
//     data-lightbox='${item.original}'
//   >
//     <img
//       class="gallery__image"
//       src="${item.preview}" 
//       alt="${item.description}"
//     />
//   </a>
// </li>`;
        
// galleryContainer.insertAdjacentHTML('afterbegin', createListItem);
// console.log(galleryContainer);
      
// })










// const createList = galleryItems.map(item => {


//   const instance = basicLightbox.create(`
//     <img class="gallery__image"
//      src="${item.preview}" 
//      alt="${item.description}">
// `)

//   instance.show()
//   galleryContainer.insertAdjacentHTML('afterbegin', instance);
//   console.log(galleryContainer);

// }





























// galleryContainer.addEventListener('click', onClick);

// function onClick (event){
// if(e)
// }



















