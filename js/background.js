const images = ["01.jpeg", "02.jpeg", "03.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
console.log(chosenImage);
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body 제일 끝에 태그를 추가.