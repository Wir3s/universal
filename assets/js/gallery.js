import cardData from "./imageData.js";

const rowEl = document.querySelector(".row");

cardData.forEach((card) => {
  const cardHtml = `
          <div class="card border-0" style="width: 18rem;">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-image="${
              card.imageUrl
            }" ${
    card.modalSize ? `data-bs-modal-size="${card.modalSize}"` : ""
  } data-description="${card.description}">
              <img src="${
                card.thumbnailUrl
              }" class="card-img-top gallery-img" alt="${card.description}">
            </a>
            <div class="card-body">
              <p class="card-text">${card.description}</p>
            </div>
          </div>
        `;

  rowEl.innerHTML += cardHtml;
});

const modalEl = document.getElementById("exampleModal");
const modalImageEl = document.getElementById("modalImage");

modalEl.addEventListener("shown.bs.modal", (e) => {
  const imageUrl = e.relatedTarget.dataset.image;
  modalImageEl.setAttribute("src", imageUrl);

  const modalSize = e.relatedTarget.dataset.bsModalSize;
  if (modalSize) {
    modalEl.querySelector(".modal-dialog").classList.add(`modal-${modalSize}`);
  }
  // Get the description from the data-description attribute
  const imageDescription = e.relatedTarget.dataset.description;

  // Set the alt attribute of the modal image element to the description
  modalImageEl.setAttribute("alt", imageDescription);
});

modalEl.addEventListener("hidden.bs.modal", () => {
  modalImageEl.setAttribute("src", "");

  const modalDialogEl = modalEl.querySelector(".modal-dialog");
  ["modal-lg", "modal-xl", "modal-sm"].forEach((size) => {
    modalDialogEl.classList.remove(size);
  });
});
