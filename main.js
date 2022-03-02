import { createPlayer } from "./createElements.js";
import { player1, player2 } from "./players.js";
import { enemyAttack, playerAttack } from "./buttle.js";
import { showResult } from "./showResults.js";
import { generateLogs } from "./logs.js";

const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector(".control");

generateLogs("start", player1, player2);

$arenas.append(createPlayer(player1));
$arenas.append(createPlayer(player2));

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();

  if (enemy.hit !== player.defence) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs("hit", player2, player1, enemy.value);
  } else {
    generateLogs("defence", player2, player1);
  }
  if (player.hit !== enemy.defence) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs("hit", player1, player2, player.value);
  } else {
    generateLogs("defence", player1, player2);
  }

  showResult();
});
