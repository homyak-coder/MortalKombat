const $arenas = document.querySelector(".arenas");

export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
};

export const createPlayer = (playerObj) => {
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
};

export const createLoadButton = () => {
  const $reloadWrap = createElement("div", "reloadWrap");
  $arenas.appendChild($reloadWrap);

  const $createReloadButton = createElement("button", "button");
  $createReloadButton.innerText = "Restart";
  $reloadWrap.appendChild($createReloadButton);

  $createReloadButton.addEventListener("click", function () {
    window.location.reload();
  });
};
