for (
  let index = 0;
  index < document.querySelectorAll("button").length;
  index++
) {
  document
    .querySelectorAll("button")
    [index].addEventListener("click", function () {
      // this.style.color="white"
      var th = this.innerHTML;
      Sound(th);
      animation(th);
    });
}
document.addEventListener("keypress", function (event) {
  Sound(event.key);
  animation(event.key)
});
function Sound(th) {
  switch (th) {
    case "w":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("./sounds/crash.mp3").play();
      break;
    default:
      console.log("enter any thinks");
  }
}

function animation(current) {
  var anime = document.querySelector("." + current);
  anime.classList.add("anime");
  setTimeout(function(){
    anime.classList.remove("anime")
  },100)
}

function add(num1, num2) {
  return num1 + num2;
}
function multy(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function calculate(num1, num2, operator) {
  return operator(num1, num2);
}
calculate(3, 5, add);
