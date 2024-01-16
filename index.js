const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const image5 = document.getElementById("image-5");

let selectedImage = image1;
selectedImage.style.borderColor = "red";
selectedImage.style.borderWidth = "5px";

let notSelectImage;

const button = document.querySelector("button");
const paragraph = document.querySelector("p");

image1.addEventListener("click", function(){

    notSelectImage = selectedImage;
    notSelectImage.style.borderColor = "black";
    notSelectImage.style.borderWidth = "2px";

    selectedImage = image1;
    selectedImage.style.borderColor = "red";
    selectedImage.style.borderWidth = "5px";
});

image2.addEventListener("click", function(){

    notSelectImage = selectedImage;
    notSelectImage.style.borderColor = "black";
    notSelectImage.style.borderWidth = "2px";
    
    selectedImage = image2;
    selectedImage.style.borderColor = "red";
    selectedImage.style.borderWidth = "5px";
});

image3.addEventListener("click", function(){

    notSelectImage = selectedImage;
    notSelectImage.style.borderColor = "black";
    notSelectImage.style.borderWidth = "2px";
    
    selectedImage = image3;
    selectedImage.style.borderColor = "red";
    selectedImage.style.borderWidth = "5px";
});

image4.addEventListener("click", function(){

    notSelectImage = selectedImage;
    notSelectImage.style.borderColor = "black";
    notSelectImage.style.borderWidth = "2px";
    
    selectedImage = image4;
    selectedImage.style.borderColor = "red";
    selectedImage.style.borderWidth = "5px";
});

image5.addEventListener("click", function(){

    notSelectImage = selectedImage;
    notSelectImage.style.borderColor = "black";
    notSelectImage.style.borderWidth = "2px";
    
    selectedImage = image5;
    selectedImage.style.borderColor = "red";
    selectedImage.style.borderWidth = "5px";
});

button.addEventListener("click", function(){

    if(selectedImage == image1){
        paragraph.innerText = "You bought an apple!"
    } else if(selectedImage == image2){
        paragraph.innerText = "You bought a bread!"
    } else if(selectedImage == image3){
        paragraph.innerText = "You bought a cake!"
    } else if(selectedImage == image4){
        paragraph.innerText = "You bought a donut!"
    } else if(selectedImage == image5){
        paragraph.innerText = "You bought an egg!"
    }

    
});