const rangeNumber = document.querySelector("#rangeNumber");
const userNumber = document.querySelector("#userNumber");
const gameBox = document.querySelector("#resultBox");
const rate = document.querySelector(".rate");
const result = document.querySelector(".result");

const game = document.querySelector("#game");
function playBtn(event) {
   event.preventDefault();
   const user = userNumber.value;
   const computer = Math.floor((Math.random() * rangeNumber.value)) + 1;

   if (user == computer) {
      gameBox.classList.remove("hidden");
      rate.innerText = `You chose: ${user}, the machine chose: ${computer}`;
      result.innerText = "You Winner!";
   } else {
      gameBox.classList.remove("hidden");
      rate.innerText = `You chose: ${user}, the machine chose: ${computer}`;
      result.innerText = "You lost!";
   }

}

game.addEventListener("submit", playBtn);

