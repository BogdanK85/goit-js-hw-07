import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryElem = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}" 
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`);

galleryElem.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));
galleryElem.addEventListener('click', onPictureClick)

function onPictureClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const pictureInModal = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="1200" height="800">`, {
        onShow: (document.addEventListener('keyup', onEscapeClose))
    }
    );
    document.removeEventListener('keyup', onEscapeClose)

    pictureInModal.show();

    galleryElem.addEventListener('keydown', onEscapeClose)

    function onEscapeClose(event) {
        if (event.code === "Escape") {
            pictureInModal.close()
        }
}
}
