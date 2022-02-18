const $arenas = document.querySelector(".arenas");
const $formFight = document.querySelector(".control");
const $chat = document.querySelector(".chat");

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};

const ATTACK = ["head", "body", "foot"];

const logs = {
  start:
    "Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.",
  end: [
    "Результат удара [playerWins]: [playerLose] - труп",
    "[playerLose] погиб от удара бойца [playerWins]",
    "Результат боя: [playerLose] - жертва, [playerWins] - убийца",
  ],
  hit: [
    "[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.",
    "[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.",
    "[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.",
    "[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.",
    "[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.",
    "[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.",
    "[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.",
    "[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.",
    "[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.",
    "[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.",
    "[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.",
    "[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.",
    "[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.",
    "[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.",
    "[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.",
    "[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.",
    "[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.",
    "[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.",
  ],
  defence: [
    "[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.",
    "[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.",
    "[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.",
    "[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.",
    "[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
    "[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.",
    "[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.",
  ],
  draw: "Ничья - это тоже победа!",
};

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

generateLogs("start", player2, player1);

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

function playerAttack() {
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

  return attack;
}

function showResult() {
  if (player1.hp === 0 || player2.hp === 0) {
    const $buttonFight = document.querySelector(".button");
    $buttonFight.disabled = true;
    createLoadButton();
  }
  if (player1.hp === 0 && player2.hp > player1.hp) {
    $arenas.appendChild(playerWins(player2.name));
    generateLogs("end", player2, player1);
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(playerWins(player1.name));
    generateLogs("end", player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWins());
    generateLogs("draw");
  }
}

function generateLogs(type, who_hit, who_defence, damage) {
  const date = new Date();
  const time = date.toLocaleTimeString();
  switch (type) {
    case "start":
      const start = logs[type]
        .replace("[player1]", who_hit.name)
        .replace("[player2]", who_defence.name)
        .replace("[time]", time);
      const elStart = `<p>${time} ${start}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elStart);
      break;
    case "hit":
      const hit = logs[type][getRandom(17)]
        .replace("[playerKick]", who_hit.name)
        .replace("[playerDefence]", who_defence.name);
      const elHit = `<p>${time} ${hit} -${damage} ${who_defence.hp}/100</p>`;
      $chat.insertAdjacentHTML("afterbegin", elHit);
      break;
    case "defence":
      const defence = logs[type][getRandom(7)]
        .replace("[playerKick]", who_hit.name)
        .replace("[playerDefence]", who_defence.name);
      const elDefence = `<p>${time} ${defence}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elDefence);
      break;
    case "end":
      const end = logs[type][getRandom(2)]
        .replace("[playerWins]", who_hit.name)
        .replace("[playerLose]", who_defence.name);
      const elEnd = `<p>${time} ${end}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elEnd);
      break;
    case "draw":
      const draw = logs[type][0];
      const elDraw = `<p>${time} ${draw}</p>`;
      $chat.insertAdjacentHTML("afterbegin", elDraw);
      break;
    default:
      break;
  }
}

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
