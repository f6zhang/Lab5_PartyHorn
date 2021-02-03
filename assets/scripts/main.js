// main.js

let volumn = 100;
let textfield = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");
let volumn_image = document.getElementById("volume-image");

textfield.onchange = function(){
    volumn = textfield.value;
    slider.value = volumn;
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
    volumn = slider.value;
    textfield.value = volumn;
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
let air = document.getElementById("radio-air-horn");
let car = document.getElementById("radio-car-horn");
let party = document.getElementById("radio-party-horn");
let choice = 1;

air.onclick = function(){
    air.value = true;
    car.value = false;
    party.value = false;
    image.src = "./assets/media/images/air-horn.svg";
    choice = 1;
};

car.onclick = function(){
    air.value = false;
    car.value = true;
    party.value = false;
    image.src = "./assets/media/images/car.svg";
    choice = 2;
};

party.onclick = function(){
    air.value = false;
    car.value = false;
    party.value = true;
    image.src = "./assets/media/images/party-horn.svg";
    choice = 3;
};

let button = document.getElementById("honk-btn");

button.onclick = function(){
    if (volumn == 0){
        return;
    }
    if (choice == 1){
        let audio = new Audio("./assets/media/audio/air-horn.mp3");
        audio.volume = volumn / 100;
        audio.play();
    }
    if (choice == 2){
        let audio = new Audio("./assets/media/audio/car-horn.mp3");
        audio.volume = volumn / 100;
        audio.play();
    }
    if (choice == 1){
        let audio = new Audio("./assets/media/audio/party-horn.mp3");
        audio.volume = volumn / 100;
        audio.play();
    }
};


