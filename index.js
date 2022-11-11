import { Header } from "./components/Header/Header.js";
import { Card } from "./components/Cards/Card.js";
import { Footer } from "./components/Footer/Footer.js";
import { Form } from "./components/Form/Form.js";

const root = document.getElementById("root");

function render(callback) {
  root.append(callback());
}

render(Header);
render(Card);
render(Form);
render(Footer);
