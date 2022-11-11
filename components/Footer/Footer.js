export function Footer() {
  const footer = document.createElement("footer");
  const navbar = document.createElement("ul");
  footer.append(navbar);
  const home = document.createElement("li");
  home.textContent = "HOME";
  home.addEventListener("click", () => {
    document.getElementById("cardbox").classList.remove("cardBoxes--hidden");
    document.getElementById("formbox").classList.add("form--hidden");
  });
  navbar.append(home);

  const form = document.createElement("li");
  form.textContent = "New Questions";
  form.addEventListener("click", () => {
    document.getElementById("formbox").classList.remove("form--hidden");
    document.getElementById("cardbox").classList.add("cardBoxes--hidden");
  });
  navbar.append(form);

  return footer;
}
