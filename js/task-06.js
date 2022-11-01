const refs = {
  input: document.getElementById("validation-input"),
};

const onInputBlur = function (event) {
  if (refs.input.value.length === 6) {
    refs.input.classList.toggle("valid");
  }
  refs.input.classList.toggle("invalid");
};
refs.input.addEventListener("blur", onInputBlur, true);
