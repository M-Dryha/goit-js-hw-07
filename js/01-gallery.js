import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

 
const galleryContainer = document.querySelector(".gallery");



const createList = galleryItems.map(item => {
    //  const instance = basicLightbox.create(
         let createList = document.createElement('li');
    createList = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
    data-lightbox='${item.original}'
  >
    <img
      class="gallery__image"
      src="${item.preview}" 
      alt="${item.description}"
    />
  </a>
</li>`;
        
galleryContainer.insertAdjacentHTML('afterbegin', createList);
console.log(galleryContainer);
      
})



























// const newGalleryList = galleryItems.map(createList).join('');
// galleryContainer.insertAdjacentHTML('afterbegin', createList);
// console.log(galleryContainer);

// const createGallery  =   galleryItems.map(item => {
//         const instance = basicLightbox.create(`
       
//          <a href='${item.original}' data-lightbox = '${item.original}' data-title = '${item.description}' rel = 'lightbox'>
//        <img src="${item.preview}" >
//        <a/>
    
// `)

//         instance.show()
//     })

