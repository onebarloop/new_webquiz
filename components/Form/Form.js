export function Form() {
  const form = document.createElement("form");
  form.setAttribute("id", "formbox");
  form.textContent = "🚧 🚧 🚧";
  form.classList.add("form--hidden");
  return form;
}
