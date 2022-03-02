import { elHP, renderHP, changeHP } from "./methods-players.js";

class Player {
  constructor(props) {
    this.player = props.player;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.weapon = props.weapon;
  }
  // attack = () => console.log(this.name + " " + "Fight...");
  changeHP = changeHP;
  elHP = elHP;
  renderHP = renderHP;
}

class Player1 extends Player {
  constructor(props) {
    super(props);
  }
}

const player1 = new Player( {
  player: 1,
  name: "Sonya Blaid",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Knife", "Sword"]
});
const player2 = new Player1({
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Bade", "Poison"],
});

export {player1, player2};
