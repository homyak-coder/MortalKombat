import { player1, player2 } from "./game.js";
import { createElement, createLoadButton } from "./createElements.js";
import { generateLogs } from "./logs.js";

const $arenas = document.querySelector(".arenas");

const showResult = () => {
  if (player1.hp === 0 || player2.hp === 0) {
    const $buttonFight = document.querySelector(".button");
    $buttonFight.disabled = true;
    createLoadButton();
  }
  if (player1.hp === 0 && player2.hp > player1.hp) {
    $arenas.appendChild(playerWins(player2.name));
    generateLogs("end", player2, player1);
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(playerWins(player1.name));
    generateLogs("end", player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins());
    generateLogs("draw");
  }
};

const playerWins = (name) => {
  const $winTitle = createElement("div", "winTitle");
  if (name) {
    $winTitle.innerText = name + " wins";
  } else {
    $winTitle.innerText = "draw";
  }

  return $winTitle;
};

export {showResult, playerWins}
