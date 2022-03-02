// function attack() {
//   alert(this.name + "Fight...");
// }
function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}
function renderHP() {
  return this.elHP().style.width = this.hp + "%";
}
function changeHP(num) {
  this.hp -= num;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}

export {elHP, renderHP, changeHP};
