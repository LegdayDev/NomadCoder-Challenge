const images = ["0.jped", "1.jped", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body 제일 끝에 태그를 추가.