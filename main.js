const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Sonya Blaid",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Knife", "Sword"],
  attack: attack,
  elHP: elHP,
  renderHP: renderHP,
  changeHP: changeHP
};

const player2 = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Bade", "Poison"],
  attack: attack,
  elHP: elHP,
  renderHP: renderHP,
  changeHP: changeHP
};

function attack() {
  alert(this.name + "Fight...");
}
function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}
function renderHP() {
  return (this.elHP().style.width = this.hp + "%");
}
function changeHP(num) {
  this.hp -= num;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}
function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(playerObj) {
  const $player = createElement("div", "player" + playerObj.player);
  const $progressbar = createElement("div", "progressbar");
  const $character = createElement("div", "character");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $img = createElement("img");

  $life.style.width = playerObj.hp + "%";
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($name);
  $progressbar.appendChild($life);

  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);

  return $player;
}

function playerWins(name) {
  const $winTitle = createElement("div", "winTitle");
  if (name) {
    $winTitle.innerText = name + " wins";
  } else {
    $winTitle.innerText = "draw";
  }

  return $winTitle;
}


function createLoadButton() {
  const $reloadWrap = createElement("div", "reloadWrap")
  const $reloadButton = createElement("button", "button")
  $reloadButton.innerText = "Reload"
  $reloadWrap.appendChild($reloadButton)

  return $reloadWrap
}

$randomButton.addEventListener("click", function () {
  player1.changeHP(getRandom(20));
  player2.changeHP(getRandom(20));
  player1.renderHP();
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
    const $reloadButton = createLoadButton()
    $reloadButton.addEventListener("click", function() {
      window.location.reload();
    })

    $arenas.appendChild($reloadButton)
  }

  if (player1.hp === 0 && player2.hp > player1.hp) {
    $arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(playerWins(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins());
  }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
