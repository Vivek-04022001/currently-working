// variables
const inputs = document.querySelectorAll(".container-button input");
const body = document.body;
const modal = document.querySelector(".crop-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const cropImage = document.getElementById("cropImage");
const saveBtn = document.querySelector('.saveBtn');
let cropper = "";


// functions

const openModal = function () {
  // console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("stop-scroll");
};

const closeModal = function () {
  // console.log("close button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("stop-scroll");
};


  

// event handler

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// file size formatter
const formatFileSize = function (bytes) {
  const sufixes = ["B", "kB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;

};

// remove image
function removeImage(id) {
  const Remove = document.querySelector(`.remove-img${id}`);
  Remove.addEventListener("click", function () {
    //declare variable
    const previewImage = document.querySelector(`.image-preview__image${id}`);
    const previewDefaultText = document.querySelector(
      `.image-preview__default-text${id}`
    );
    const Text = document.getElementById(`image-details${id}`);
    const Input = document.getElementById(`inputFile${id}`);

    //operation
    previewImage.src = "";
    Input.value = null; //SO happy to write this statments!!!!!!
    // console.log("Input value:  " + Input.value);
    previewImage.style.display = "none";
    previewDefaultText.style.display = "block";
    Text.style.display = "none";
    document.getElementsByClassName("image-preview")[id - 1].style.border =
      "2px dotted lightgrey";
  });
}

// crop functionality
inputs.forEach((input) => {
  input.addEventListener("change", function (e) {
    
    e.preventDefault();
    openModal();

    
    // create variables
    const inputId = e.target.id;
    const inputIdUniqueNumber = inputId.charAt(inputId.length - 1);

    // create reader object
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      let image = document.createElement("img");
      image.id = `image-${inputIdUniqueNumber}`;
      image.src = e.target.result;
      
      //clear cropImage
      cropImage.innerHTML = "";

      cropImage.appendChild(image);

      cropper = new Cropper(image, {
        viewMode: 1,
      });

      
    };
  });
});

// save button: preview Image + show file name & size + close modal+ REMOVE IMAGE
saveBtn.addEventListener('click', function(e){
  
  //create new variables
  const cropImageId = document.getElementById('cropImage').querySelector('img').id;
  const cropImageUniqueNumber =cropImageId.charAt(cropImageId.length -1);
  const savedImageSourceAddress = document.querySelector(`.image-preview__image${cropImageUniqueNumber}`);
  const previewDefaultText = document.querySelector(`.image-preview__default-text${cropImageUniqueNumber}`);
  const Text = document.querySelector(`#image-details${cropImageUniqueNumber}`);
  const inputFile = document.querySelector(`#inputFile${cropImageUniqueNumber}`);
  
  // canvas url
  const canvasSourceAddress = cropper.getCroppedCanvas({width: '300'}).toDataURL();
  
  // assign canvas url
  savedImageSourceAddress.src = canvasSourceAddress;
  
  
  //change css elements
  savedImageSourceAddress.style.display = 'block';
  previewDefaultText.style.display = 'none';
  Text.style.display = 'block';
  Text.style.fontSize = "13px";

  Text.innerText = `${inputFile.files[0].name} \n ${formatFileSize(inputFile.files[0].size)}`;
  

  // callback functions
  closeModal();
  removeImage(cropImageUniqueNumber);
  
})

