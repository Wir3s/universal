import cardData from "./imageData.js";

// Add an event listener that triggers when the page is fully loaded
window.addEventListener("load", () => {
  // Get a reference to the row element where the cards will be displayed
  const rowEl = document.querySelector(".row");

  // Loop through the card data array and generate HTML for each card using template literals
  cardData.forEach((card) => {
    const cardHtml = `
          <div class="card border-0" style="width: 18rem;">
            

            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-image="${
              card.imageUrl
            }" ${
      card.modalSize ? `data-bs-modal-size="${card.modalSize}"` : ""
    }>

            <img src="${
              card.thumbnailUrl
              }" class="card-img-top gallery-img" alt="${card.description}">
            </a>
            <div class="card-body">
              <p class="card-text">${card.description}</p>
            </div>
          </div>
        `;

    // Add the generated HTML to the row element
    rowEl.innerHTML += cardHtml;
  });

  // Get a reference to the modal and image elements
  const modalEl = document.getElementById("exampleModal");
  const modalImageEl = document.getElementById("modalImage");


  // Add a click event listener to the row element to handle clicks on the image links
  rowEl.addEventListener("click", (e) => {
    // Check if the clicked element is an image link
    if (e.target.tagName === "IMG") {
      e.preventDefault();


      // Get the URL of the image to display from the data-image attribute
      const imageUrl = e.target.parentNode.dataset.image;

      // Set the src attribute of the modal image element to the URL of the clicked image
      modalImageEl.setAttribute("src", imageUrl);

      // Get the size of the modal from the data-bs-modal-size attribute
      const modalSize = e.target.parentNode.dataset.bsModalSize;

      // Set the size of the modal if the data-bs-modal-size attribute is present
      if (modalSize) {
        modalEl
          .querySelector(".modal-dialog")
          .classList.add(`modal-${modalSize}`);
      }

      // Show the modal
      const modal = new bootstrap.Modal(modalEl);
      modal.show();

      modalEl.addEventListener("hidden.bs.modal", () => {
        modalImageEl.setAttribute("src", "");
        // Remove the modal size class from the modal dialog element
        modalEl
          .querySelector(".modal-dialog")
          .classList.remove(`modal-${modalSize}`);
      });
    }
  });
});
