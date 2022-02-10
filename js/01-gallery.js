import { galleryItems } from './gallery-items.js';

 
const galleryContainer = document.querySelector("div.gallery");



 const createList = galleryItems.map(item => {
  
      let createListItem = document.createElement('li');
    createListItem = `<div class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source='${item.original}'
      alt="${item.description}"
    />
  </a>
</div>`;
        
galleryContainer.insertAdjacentHTML('afterbegin', createListItem);
console.log(galleryContainer);
      
})









