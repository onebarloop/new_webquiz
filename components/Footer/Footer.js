export function Footer() {
  const footer = document.createElement("footer");
  const navbar = document.createElement("ul");
  navbar.classList.add("navbar");
  footer.append(navbar);

  const home = document.createElement("li");
  home.textContent = "HOME";
  home.addEventListener("click", () => {
    document.getElementById("cardbox").classList.remove("cardBoxes--hidden");
    document.getElementById("formbox").classList.add("formbox--hidden");
  });
  navbar.append(home);

  const form = document.createElement("li");
  form.textContent = "NEW";
  form.addEventListener("click", () => {
    document.getElementById("formbox").classList.remove("formbox--hidden");
    document.getElementById("cardbox").classList.add("cardBoxes--hidden");
  });
  navbar.append(form);

  return footer;
}
