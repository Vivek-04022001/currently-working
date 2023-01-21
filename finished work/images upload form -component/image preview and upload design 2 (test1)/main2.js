"use strict";

// Convert the file size to a readable format
const formatFileSize = function (bytes) {
  const sufixes = ["B", "kB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

// remove button function
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

// preview before upload function
function previewBeforeUpload(id) {
  const inputFile = document.getElementById(`inputFile${id}`);
  removeImage(id);

  inputFile.addEventListener("change", function (e) {
    const file = this.files[0];
    const Text = document.getElementById(`image-details${id}`);
    const previewImage = document.querySelector(`.image-preview__image${id}`);
    const previewDefaultText = document.querySelector(
      `.image-preview__default-text${id}`
    );
    const Input = document.getElementById(`inputFile${id}`);

    // console.log(Input.value);
    if (file /*&& file.size === 35000*/) {
      const reader = new FileReader();
      const Remove = document.querySelector(`.remove-img${id}`);
      // Remove.style.display = "inline-block";
      Text.style.display = "block";
      Text.innerText = `${file.name} \n ${formatFileSize(file.size)}`;
      Text.style.fontSize = "13px";
      document.getElementsByClassName("image-preview")[id - 1].style.border =
        "none";
      // document.getElementsByClassName("image-preview")[
      //   id - 1
      // ].style.backgroundColor = "transparent";

      previewDefaultText.style.display = "none";
      previewImage.style.display = "block";

      reader.addEventListener("load", function () {
        previewImage.setAttribute("src", this.result);
      });

      reader.readAsDataURL(file);
    }
    // else if (file.size > 35000) {
    //   Text.style.display = "block";
    //   Text.innerText = `FILE SIZE SHOULDN'T EXCEEDS 350 KB`;
    //   Text.style.fontSize = "13px";
    //   Text.style.color = "red";
    // }
  });
}
/************general variables***********/
const previewContainer = document.getElementById("imagePreview");

/***********function call to member aadhar card********/
previewBeforeUpload(1);
previewBeforeUpload(2);

/***********function call to member voter card********/

previewBeforeUpload(3);
previewBeforeUpload(4);

/***********function call to co-insurer aadhaar card********/
previewBeforeUpload(5);
previewBeforeUpload(6);

/***********function call to bank details********/

previewBeforeUpload(7);
previewBeforeUpload(8);
