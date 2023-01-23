const cropModal = document.querySelector(".crop-modal");
const savedImage0 = document.querySelector(".savedImage-0");

const savedImage1 = document.querySelector(".savedImage-1");
const inputImage0 = document.getElementById("input-image-0");
const inputImage1 = document.getElementById("input-image-1");

// variables
const inputs = document.querySelectorAll("input");
const cropImage = document.getElementById("cropImage");
const saveBtn = document.querySelector(".saveBtn");

let cropper = "";

//events
inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    //create new variables
    let inputId = e.target.id;
    let inputNumber = inputId.charAt(inputId.length - 1);

    // reader object
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      let image = document.createElement("img");

      image.id = `image-${inputNumber}`;

      image.src = e.target.result;

      //clear cropImage
      cropImage.innerHTML = "";

      cropImage.appendChild(image);

      cropModal.classList.remove("hide");

      cropper = new Cropper(image, {
        viewMode: 1,
      });
    };
  });
});

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // create new variables
  const cropImageId = document.getElementById("cropImage").querySelector("img").id;
  const imageNumber = cropImageId.charAt(cropImageId.length - 1);
  const savedImageSourceAddress = document.getElementsByClassName(
    `savedImage-${imageNumber}`
  )[0];
  const showImageDiv = document.getElementsByClassName(
    `show-image-${uniqueId}`
  )[0];

  // get canvas cropped url
  const canvasSourceAddress = cropper
    .getCroppedCanvas({
      width: "300",
    })
    .toDataURL();

  // hide showImageDiv
  showImageDiv.classList.remove("hide");


  savedImageSourceAddress.src = canvasSourceAddress;
});
