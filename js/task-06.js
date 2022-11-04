const refs = {
  style: document.querySelector("#validation-input"),
  input: document.getElementById("validation-input"),
};

const onInputBlur = function (event) {
  refs.input.classList.remove(
    "#validation-input",
    "#validation-input.invalid",
    "#validation-input.valid"
  );
  if (Number(refs.input.value.length) === 6) {
    refs.input.classList.remove("invalid");
    refs.input.classList.toggle("valid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
};
refs.input.addEventListener("blur", onInputBlur);
