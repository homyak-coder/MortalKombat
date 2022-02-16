const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Sonya Blaid",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Knife", "Sword"],
  attack: function (name) {
    alert(player1.name + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Bade", "Poison"],
  attack: function (name) {
    alert(player2.name + "Fight...");
  },
};

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

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= getRandom(20);
  $playerLife.style.width = player.hp + "%";
  console.log($playerLife.style.width);

  if (player.hp <= 0) {
    player.hp = 0;
  }

  $playerLife.style.width = player.hp + "%";
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

function getRandom(num) {
  return Math.ceil(Math.random() * num);
}

$randomButton.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);

  if (player1.hp === 0 || player2.hp === 0) {
    $randomButton.disabled = true;
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
