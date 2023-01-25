// variables
const labels = document.querySelectorAll(".container-button label");
const body = document.body;
const modal = document.querySelector(".crop-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// functions

const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("stop-scroll");
  modal.classList.add('position-fixed');
};

const closeModal = function () {
  console.log("close button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("stop-scroll");
  modal.classList.remove('position-fixed');

};

// event handler

labels.forEach((label) => {
  label.addEventListener("click", function (e) {
    console.log("clicked");
    e.preventDefault();
    openModal();
  });
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
