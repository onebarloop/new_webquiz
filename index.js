import { Header } from "./components/Header/Header.js";
import { Card } from "./components/Cards/Card.js";
import { Footer } from "./components/Footer/Footer.js";

const root = document.getElementById("root");

root.append(Header());
root.append(Card());
root.append(Footer());
