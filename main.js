const player1 = {
  name: "Sonya Blaid",
  hp: 70,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Knife", "Sword"],
  attack: function () {
    alert(player1.name + "Fight...");
  },
};

const player2 = {
  name: "Kitana",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Bade", "Poison"],
  attack: function () {
    alert(player2.name + "Fight...");
  },
};

function createPlayer(player, heroName) {
  const $player1 = document.createElement("div");
  $player1.classList.add(player);

  let progressBar = document.createElement("div");
  progressBar.classList.add("progressbar");

  const character = document.createElement("div");
  character.classList.add("character");

  $player1.appendChild(progressBar);
  $player1.appendChild(character);

  let life = document.createElement("div");
  life.classList.add("life");
  life.style.width = "100%";
  life.innerText = heroName.hp;
  progressBar.appendChild(life);

  const name = document.createElement("div");
  name.classList.add("name");
  name.innerText = heroName.name;
  progressBar.appendChild(name);

  const imgHero = document.createElement("img");
  character.appendChild(imgHero);
  // imgHero.src = "http://reactmarathon-api.herokuapp.com/assets/subzero.gif";
  imgHero.src = heroName.img;

  let arenas = document.querySelector(".arenas");
  arenas.appendChild($player1);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
