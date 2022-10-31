const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

const onInputChange = (event) => {
  refs.input.value.length === 0
    ? (refs.output.textContent = "Anonymous")
    : (refs.output.textContent = event.currentTarget.value);
};
refs.input.addEventListener("input", onInputChange);
