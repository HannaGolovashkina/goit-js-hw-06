const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  data.email = data.email.trim().toLowerCase();
  for (const [key, value] of Object.entries(data)) {
    if (value !== "") continue;
    const {
      elements: { email, password },
    } = event.currentTarget;
    const userDetails = { email: email.value, password: password.value };
    // elements[key].focus();
    alert("Все поля должны быть заполнены!");
    return form.reset();
  }
  console.log(data);
  form.reset();
}
