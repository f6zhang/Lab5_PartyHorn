// main.js

// TODO

let volumn = 100;
let textfield = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");
let volumn_image = document.getElementById("volume-image");

textfield.onchange = function(){
    volumn = textfield.nodeValue;
    slider.nodeValue = volumn;
    if (volumn >= 67 && volumn <= 100){
        volumn_image.src = "./assets/media/icons/volume-level-3.svg";
    }else if (volumn >= 34){
        volumn_image.src = "./assets/media/icons/volume-level-2.svg";
    }else if (volumn >= 1){
        volumn_image.src = "./assets/media/icons/volume-level-1.svg";
    }else{
        volumn_image.src = "./assets/media/icons/volume-level-0.svg";
    }
};

slider.onchange = function(){
    volumn = slider.nodeValue;
    textfield.nodeValue = volumn;
    if (volumn >= 67 && volumn <= 100){
        volumn_image.src = "./assets/media/icons/volume-level-3.svg";
    }else if (volumn >= 34){
        volumn_image.src = "./assets/media/icons/volume-level-2.svg";
    }else if (volumn >= 1){
        volumn_image.src = "./assets/media/icons/volume-level-1.svg";
    }else{
        volumn_image.src = "./assets/media/icons/volume-level-0.svg";
    }
};

let image = document.getElementById("sound-image");

