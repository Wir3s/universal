// Define an array of objects, where each object represents a card
const cardData = [
  {
    thumbnailUrl: "./images/01.jpg",
    imageUrl: "./images/01.jpg",
    description: "Our hero, Runty Collins.",
  },
  {
    thumbnailUrl: "./images/01b.jpg",
    imageUrl: "./images/01b.jpg",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

// Get a reference to the row element where the cards will be displayed
const rowEl = document.querySelector(".row");

// Loop through the card data array and generate HTML for each card using template literals
cardData.forEach((card) => {
  const cardHtml = `
          <div class="card border-0" style="width: 18rem;">
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-image="${card.imageUrl}">
              <img src="${card.thumbnailUrl}" class="card-img-top gallery-img" alt="...">
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

// Add a click event listener to each image link
document.querySelectorAll("[data-bs-toggle='modal']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the URL of the image to display from the data-image attribute
    const imageUrl = e.currentTarget.dataset.image;

    // Set the src attribute of the modal image element to the URL of the clicked image
    modalImageEl.setAttribute("src", imageUrl);

    // Show the modal
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  });
});
