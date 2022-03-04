import { getRandom } from "./utiits.js";

const $formFight = document.querySelector(".control");

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
};



const playerAttack = async () => {
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

  const result = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
    method: 'POST',
    body: JSON.stringify({
      hit: attack.hit,
      defence: attack.defence
    })
  }).then(data => data.json());

  return result
};

export {HIT, playerAttack}
