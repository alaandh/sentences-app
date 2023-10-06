import "./style.css";
import { BreakingbadApp } from "./src/breakingbad/breakingbad-app";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://es.wikipedia.org/wiki/Breaking_Bad"><img src="/src/img/logo.png" class="logo" alt="Breaking Bad logo"/></a>
    <h1 id="app-title">Sentences App</h1>
    <div class="card"></div>
  </div>
`;

const element = document.querySelector(".card");

BreakingbadApp(element);
