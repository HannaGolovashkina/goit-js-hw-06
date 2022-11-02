const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

refs.input.addEventListener("input", (event) => {
  refs.span.style.fontSize = `${refs.input.value}px`;
});
