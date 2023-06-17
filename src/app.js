/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("#the-excuse").innerHTML = generateExcuse();
  let generateExcuse = () => {
    let who = ["Devo", "Non ho potuto", "Mia madre non ha potuto", "La papaia"];
    let action = ["prendere cura", "fare il cibo", "salutare", ""];
    let what = ["a mio nipote", "da mia zia", "al Re"];
    let when = ["stasera.", "ed ancora non mangia", "e devo aiutarla"];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] +
      "" +
      action[actionIndex] +
      "" +
      what[whatIndex] +
      "" +
      when[whenIndex]
    );
  };
};
