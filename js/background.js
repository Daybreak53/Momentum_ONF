const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bg").style;

bgImage.background = `url(img/${chosenImage}) no-repeat`;
bgImage.backgroundSize = "cover";
bgImage.width = "100%";
bgImage.height = "100%";
bgImage.backgroundPosition = "center";
