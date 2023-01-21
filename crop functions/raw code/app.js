// variables
const cropImage = document.getElementById("cropImage");
const cropModal = document.querySelector(".crop-modal");
const saveBtn = document.querySelector(".saveBtn");
const savedImage0 = document.querySelector(".savedImage-0");


const savedImage1 = document.querySelector(".savedImage-1");
const inputImage0 = document.getElementById("input-image-0");
const inputImage1 = document.getElementById("input-image-1");
const showImage = document.querySelector(".show-image");

const inputs = document.querySelectorAll('input');
console.log(inputs);


let cropper = "";
inputs.forEach((input)=>{
  input.addEventListener("change",(e)=>{
    let id = (e.target.id);
    let uniqueString = id.charAt(id.length -1);
    const imageFileName = document.getElementsByClassName(`savedImage-${uniqueString}`);
    console.log(imageFileName);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
   reader.onload = (e)=>{
    let image = document.createElement("img");
    // image.id = "image";
    image.id = `image-${uniqueString}`
    console.log(image.id);
    image.src = e.target.result;
    cropImage.innerHTML = '';
    console.log(cropImage);
    cropImage.appendChild(image);
    
    cropModal.classList.remove("hide");
    
    cropper = new Cropper(image,{
                    
        viewMode: 1
    });
} 

  })

  saveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(document.getElementsByClassName('cropper-hidden'));
  })
  
})



// InputElement.addEventListener("change", (e)=> {
//     console.log("Hello world");
//   const reader = new FileReader();
  
// reader.onload = (e)=>{
//     let image = document.createElement("img");
//     image.id = "image";
//     image.src = e.target.result;
//     cropImage.innerHTML = '';
//     console.log(cropImage);
//     cropImage.appendChild(image);
    
//     cropModal.classList.remove("hide");
    
//     cropper = new Cropper(image,{
                    
//         viewMode: 1
//     });
// }  
//   reader.readAsDataURL(e.target.files[0]);
// });


// saveBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   let imageSource = cropper
//     .getCroppedCanvas({
//       width: '300',
//     })
//     .toDataURL();

//     showImage.classList.remove("hide");
//     savedImage.src = imageSource;

    
// });
