const img = document.querySelectorAll(".img");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const loginPageLoaded = document.querySelector("#loginPage");


let counter = 0;
runEvents();

img.forEach((image, index) => {
  image.style.left = `${index * 100}%`;
});
const slideImage = () => {
  img.forEach((image) => {
    image.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function runEvents() {
  left.addEventListener("click", goPrev);
  right.addEventListener("click", goNext);
  loginPageLoaded.addEventListener("click", loginPage);
}

function goPrev() {
  if (counter > 0 && counter < 6) {
    counter--;
  }
  slideImage();
}
function goNext() {
  if (counter < 5) {
    counter++;
  }

  slideImage();
}

