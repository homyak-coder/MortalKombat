import { createPlayer } from "./createElements.js";
import {Player} from './players.js'
import { playerAttack } from "./buttle.js";
import { showResult } from "./showResults.js";
import { generateLogs } from "./logs.js";
import {getRandom} from "./utiits.js";


let player1;
let player2;


class Game {
    constructor() {}
    getPlayers = async () => {
        const body = fetch("https://reactmarathon-api.herokuapp.com/api/mk/players").then(res => res.json());
        return body
    };

    start = async () => {
        const players = await this.getPlayers()

        const p1 = players[getRandom(players.length)];

        player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: "arenas"
        });

        const p2 = players[getRandom(players.length)];

        player2 = new Player({
            ...p2,
            player: 2,
            rootSelector: "arenas"
        });

        const $arenas = document.querySelector(".arenas");
        const $formFight = document.querySelector(".control");

        generateLogs("start", player1, player2);

        $arenas.append(createPlayer(player1));
        $arenas.append(createPlayer(player2));


        $formFight.addEventListener("submit", async function (e) {
            e.preventDefault();

            const attackResult  = await playerAttack();

            console.log(attackResult)

            const {hit:playerHit, defence:playerDefence, value:playerValue}  = attackResult.player1;
            const {hit:enemyHit, defence:enemyDefence, value:enemyValue} = attackResult.player2;

            if (enemyHit !== playerDefence) {
                player1.changeHP(enemyValue);
                player1.renderHP();
                generateLogs("hit", player2, player1, enemyValue);
            } else {
                generateLogs("defence", player2, player1);
            }
            if (playerHit !== enemyDefence) {
                player2.changeHP(playerValue);
                player2.renderHP();
                generateLogs("hit", player1, player2, playerValue);
            } else {
                generateLogs("defence", player1, player2);
            }

            showResult();
        });
    };
}

export default Game;
export {player1, player2};
