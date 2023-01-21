// variables
const cropImage = document.getElementById("cropImage");
const cropModal = document.querySelector(".crop-modal");
const saveBtn = document.querySelector(".saveBtn");
const savedImage = document.querySelector(".savedImage");
const inputImage = document.getElementById("input-image");
const showImage = document.querySelector(".show-image");


let cropper = "";


inputImage.addEventListener("change", (e)=> {
    console.log("Hello world");
  const reader = new FileReader();
  
reader.onload = (e)=>{
    let image = document.createElement("img");
    image.id = "image";
    image.src = e.target.result;
    cropImage.innerHTML = '';
    console.log(cropImage);
    cropImage.appendChild(image);
    
    cropModal.classList.remove("hide");
    
    cropper = new Cropper(image,{
                    
        viewMode: 1
    });
}  
  reader.readAsDataURL(e.target.files[0]);
});


saveBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let imageSource = cropper
    .getCroppedCanvas({
      width: '300',
    })
    .toDataURL();

    showImage.classList.remove("hide");
    savedImage.src = imageSource;

    
});
