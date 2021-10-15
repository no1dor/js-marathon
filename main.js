function Player(_name, _img, _weapon = ["fist", "leg"], _hp = 100) {
  this.name = _name;
  this.hp = _hp;
  this.img = _img;
  this.weapon = _weapon;
  this.attack = function() {
    console.log(`${this.name} Fight...`);
  };
}

function createPlayer(playerType, player) {
  const playerContainer = document.createElement("div");
  playerContainer.classList.add(playerType);

  const progressbarContainer = document.createElement("div");
  progressbarContainer.classList.add("progressbar");
  const lifeContainer = document.createElement("div");
  lifeContainer.classList.add("life");
  lifeContainer.style.width = `${player.hp}%`;
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("name");
  nameContainer.textContent = player.name;
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("character");
  imgContainer.innerHTML = `<img src="${player.img}" alt="${player.name}">`;

  progressbarContainer.append(lifeContainer);
  progressbarContainer.append(nameContainer);
  playerContainer.append(progressbarContainer);
  playerContainer.append(imgContainer);

  return playerContainer;
}

const player1 = new Player(
  "SubZero",
  "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
);
player1.attack();

const player2 = new Player(
  "Scorpion",
  "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
);
player2.attack();

const arenaBlock = document.querySelector(".arenas");

arenaBlock.append(createPlayer("player1", player1));
arenaBlock.append(createPlayer("player2", player2));
