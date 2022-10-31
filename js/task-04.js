let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");

currentValue();

buttonDecrement.addEventListener("click", () => {
  counterValue--;
  currentValue();
});
buttonIncrement.addEventListener("click", () => {
  counterValue++;
  currentValue();
});

function currentValue() {
  value.innerText = counterValue;
}
