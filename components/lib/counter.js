export function counter(text, num) {
  text.textContent = "120" - num.value.length + " characters left";
}
