// variables
const inputs = document.querySelectorAll(".container-button input");
const body = document.body;
const modal = document.querySelector(".crop-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const cropImage = document.getElementById('cropImage');
let cropper = "";

// functions

const openModal = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("stop-scroll");
  
};

const closeModal = function () {
  console.log("close button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("stop-scroll");
  

};

// event handler

inputs.forEach((input) => {
  input.addEventListener("change", function (e) {
    console.log("clicked");
    e.preventDefault();
    openModal();
    
    // create variables
    const inputId = e.target.id;
    const inputIdUniqueNumber = inputId.charAt(inputId.length -1);

    // create reader object
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(e){
      let image = document.createElement('img');
      image.id = `image-${inputIdUniqueNumber}`;
      image.src = e.target.result;
      console.log(image.id);
      console.log(image.src);
      //clear cropImage
      cropImage.innerHTML = '';

      cropImage.appendChild(image);

      cropper = new cropper(image,{
        viewMode: 1,
      });
    };
    
    
  });
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
