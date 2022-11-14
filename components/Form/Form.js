import { Card } from "../Cards/Card.js";
import { questions } from "../questions/questions.js";
import { counter } from "../lib/counter.js";

export function Form() {
  const formbox = document.createElement("div");
  formbox.setAttribute("id", "formbox");
  formbox.classList.add("formbox--hidden", "formbox");
  const form = document.createElement("form");
  form.classList.add("form");
  formbox.append(form);
  const questionBox = document.createElement("textarea");
  questionBox.setAttribute("name", "question");
  questionBox.setAttribute("placeholder", "...type your question");
  form.append(questionBox);
  const countQuestion = document.createElement("p");
  questionBox.addEventListener("input", () => {
    counter(countQuestion, questionBox);
  });

  countQuestion.textContent = "120 characters left";
  form.append(countQuestion);
  const answerBox = document.createElement("textarea");
  answerBox.setAttribute("name", "answer");
  answerBox.setAttribute("placeholder", "...type your answer");
  form.append(answerBox);
  const countAnswer = document.createElement("p");
  answerBox.addEventListener("input", () => {
    counter(countAnswer, answerBox);
  });
  countAnswer.textContent = "120 characters left";
  form.append(countAnswer);

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "SUBMIT";
  form.append(submitBtn);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newQuestion = {
      question: event.target.question.value,
      answer: event.target.answer.value,
    };
    questions.push(newQuestion);
    console.log(questions);
    formbox.append(Card([newQuestion]));
    const cardBoxMain = document.querySelector('[data-js="cardBoxMain"]');
    cardBoxMain.append(Card([newQuestion]));
    event.target.reset();
    countQuestion.textContent = "120 characters left";
    countAnswer.textContent = "120 characters left";
    event.target.question.focus();
  });
  return formbox;
}
