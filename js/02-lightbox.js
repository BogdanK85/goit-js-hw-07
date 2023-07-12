import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryElem = document.querySelector(".gallery");
const newGalleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
        </a>
</li>`);

galleryElem.insertAdjacentHTML('afterbegin', newGalleryMarkup.join(''));
galleryElem.addEventListener('click', onPictureClick);

function onPictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
}

//const lightbox = new SimpleLightbox;
new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionsDelay: 250,
});
