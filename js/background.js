const images = ["0.jpg", "1.jpg", "2.jpg"];

const bgImageNumber = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${bgImageNumber}`;
console.log(bgImage);
document.body.appendChild(bgImage);
