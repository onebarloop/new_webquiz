export function Form() {
  const form = document.createElement("form");
  form.setAttribute("id", "formbox");
  form.textContent = "HAALLLOOOO!";
  form.classList.add("form--hidden");
  return form;
}
