import { questions } from "../questions/questions.js";

export function Card() {
  const cardbox = document.createElement("article");
  cardbox.setAttribute("id", "cardbox");
  questions.forEach((element) => {
    const questionP = document.createElement("p");
    questionP.textContent = element.question;
    cardbox.append(questionP);
    const answerBtn = document.createElement("button");
    answerBtn.textContent = "Show answer";
    answerBtn.addEventListener("click", () => {
      answerP.classList.toggle("card__answer--show");
    });
    cardbox.append(answerBtn);
    const answerP = document.createElement("p");
    answerP.textContent = element.answer;
    answerP.classList.add("card__answer");
    cardbox.append(answerP);
  });
  return cardbox;
}
