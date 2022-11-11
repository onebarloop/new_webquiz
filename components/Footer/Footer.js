export function Footer() {
  const footer = document.createElement("footer");
  const navbar = document.createElement("ul");
  footer.append(navbar);
  const home = document.createElement("li");
  home.textContent = "HOME";
  home.addEventListener("click", () => {
    console.log("home clicked");
  });
  navbar.append(home);
  const form = document.createElement("li");
  form.addEventListener("click", () => {
    console.log("form clicked");
  });
  form.textContent = "New Questions";
  navbar.append(form);

  return footer;
}
