import {db} from "./db.js";
let paintings = document.getElementsByClassName("paintings")[0]
//split для разделения  строки в тех местах где стоят %%
let pictures = db.split("%%")
for (let pictureNumber = 0; pictureNumber < pictures.length; pictureNumber++) {
    let pictureItems = pictures[pictureNumber].split("--");
    let tags = `
    <div class="painting" onclick="openImage(`+pictureNumber+`)">
        <img src="`+pictureItems[0]+`" alt="">
        <div class="info">
            <h2>`+pictureItems[1]+`</h2>
            <h3>`+pictureItems[2]+`</h3>
            <p>`+pictureItems[3]+`</p>
            <a href="`+pictureItems[4]+`" class="knopka">подробнее</a>
        </div>
    </div>
    `
    ;
    paintings.innerHTML = paintings.innerHTML + tags;
}
 