import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href = "${original}">
      <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
      />
    </a>`
})
const imagesMarkupString = imagesMarkup.join('')

const galleryEl = document.querySelector('.gallery')

galleryEl.insertAdjacentHTML('beforeend', imagesMarkupString)

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 0.8,

});

