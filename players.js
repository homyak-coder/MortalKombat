import { attack, elHP, renderHP, changeHP } from "./methods-players.js";

export const player1 = {
  player: 1,
  name: "Sonya Blaid",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Knife", "Sword"],
  attack,
  elHP,
  renderHP,
  changeHP,
};
export const player2 = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Bade", "Poison"],
  attack,
  elHP,
  renderHP,
  changeHP,
};
