function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

const setBg = (event) => {
  const randomColor = getRandomHexColor();
  // refs.body.style.backgroundColor = randomColor;
  refs.body.setAttribute("style", `background-color: ${randomColor}`);
  refs.span.innerHTML = randomColor;
  // refs.span.textContent = randomColor;
};

refs.button.addEventListener("click", setBg);
setBg();
