let modal = document.getElementsByClassName("modal")[0]
let picture = document.getElementById("picture")
let currentImage;
let paintings = document.getElementsByClassName("paintings")[0];
function openImage(imageNumber){
    currentImage = imageNumber

    picture.src = imageNumber + ".jpg";
modal.style.transform = "none"
}
function slideRight(){
    currentImage = currentImage + 1
    if(currentImage == paintings.children.length){
currentImage = 0
    }
    picture.src = currentImage + ".jpg";
}
function slideLeft(){
    currentImage = currentImage - 1
    if (currentImage == -1){
        currentImage = paintings.children.length - 1
    }
    picture.src = currentImage + ".jpg"
}
function closeModal() {
    modal.style.transform = "translateY(-100%)"
}
var g=0
for(g=2 ; g<9 ; g=g*2){
}



