// variables
const inputs = document.querySelectorAll("input");
const cropImage = document.getElementById("cropImage");
const saveBtn = document.querySelector(".saveBtn");
const cropModal = document.querySelector(".crop-modal");
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
  const cropImageNumber = cropImageId.charAt(cropImageId.length - 1);
  const savedImageSourceAddress = document.getElementsByClassName(
    `savedImage-${cropImageNumber}`
  )[0];
  const showImageDiv = document.getElementsByClassName(
    `show-image-${cropImageNumber}`
  )[0];
  
  // canvas url
  const canvasSourceAddress = cropper
    .getCroppedCanvas({
      width: "300",
    })
    .toDataURL();

   // hide div 
  showImageDiv.classList.remove("hide");

  // assign canvas url 
  savedImageSourceAddress.src = canvasSourceAddress;
});
