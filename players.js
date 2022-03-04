import { elHP, renderHP, changeHP } from "./methods-players.js";
import {getRandom} from "./utiits.js";

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

export {Player}


