const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector(".control");

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ["head", "body", "foot"];

const player1 = {
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

const player2 = {
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

function attack() {
  alert(this.name + "Fight...");
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
function changeHP(num) {
  this.hp -= num;

  if (this.hp <= 0) {
    this.hp = 0;
  }
}
function elHP() {
  return document.querySelector(".player" + this.player + " .life");
}
function renderHP() {
  return (this.elHP().style.width = this.hp + "%");
}

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}
function createLoadButton() {
  const $reloadWrap = createElement("div", "reloadWrap");
  $arenas.appendChild($reloadWrap);

  const $createReloadButton = createElement("button", "button");
  $createReloadButton.innerText = "Restart";
  $reloadWrap.appendChild($createReloadButton);

  $createReloadButton.addEventListener("click", function () {
    window.location.reload();
  });
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

// $randomButton.addEventListener("click", function () {
//   player1.changeHP(getRandom(20));
//   player2.changeHP(getRandom(20));
//   player1.renderHP();
//   player2.renderHP();

//   if (player1.hp === 0 || player2.hp === 0) {
//     $randomButton.disabled = true;
//     createLoadButton();
//
//   if (player1.hp === 0 && player2.hp > player1.hp) {
//     $arenas.appendChild(playerWins(player2.name));
//   } else if (player2.hp === 0 && player1.hp > player2.hp) {
//     $arenas.appendChild(playerWins(player1.name));
//   } else if (player1.hp === 0 && player2.hp === 0) {
//     $arenas.appendChild(playerWins());
//   }
// });

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1];
  const defence = ATTACK[getRandom(3) - 1];

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  };
}

$formFight.addEventListener("submit", function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const attack = {};

  for (let item of $formFight) {
    if (item.checked && item.name === "hit") {
      attack.value = getRandom(HIT[item.value]);
      attack.hit = item.value;
    }
    if (item.checked && item.name === "defence") {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  if (enemy.hit === attack.defence) {
    player1.changeHP(0);
  } else {
    player1.changeHP(enemy.value);
  }
  if (attack.hit === enemy.defence) {
    player2.changeHP(0);
  } else {
    player2.changeHP(attack.value);
  }

  player1.renderHP();
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    const $buttonFight = document.querySelector(".button");
    $buttonFight.disabled = true;
    createLoadButton();
  }
  if (player1.hp === 0 && player2.hp > player1.hp) {
    $arenas.appendChild(playerWins(player2.name));
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(playerWins(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins());
  }
  console.log("####: attack", attack);
  console.log("####: enemy", enemy);
});
