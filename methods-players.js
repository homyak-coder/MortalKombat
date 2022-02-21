export function attack() {
  alert(this.name + "Fight...");
}
export function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}
export function renderHP() {
  return this.elHP().style.width = this.hp + "%";
}
export function changeHP(num) {
  this.hp -= num;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}
