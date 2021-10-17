const arenaBlock = document.querySelector(".arenas");
const btn = document.querySelector(".arenas .button");

function Player(_type, _name, _img, _weapon = ["fist", "leg"], _hp = 100) {
  this.type = _type;
  this.name = _name;
  this.hp = _hp;
  this.img = _img;
  this.weapon = _weapon;
  this.attack = function() {
    console.log(`${this.name} Fight...`);
  };
}

function createEle(tag, className) {
  const ele = document.createElement(tag);

  if (className) {
    ele.classList.add(className);
  }

  return ele;
}

function createPlayer(player) {
  const playerContainer = createEle("div", `player${player.type}`);
  const progressbarContainer = createEle("div", "progressbar");
  const lifeContainer = createEle("div", "life");
  lifeContainer.style.width = `${player.hp}%`;
  const nameContainer = createEle("div", "name");
  nameContainer.textContent = player.name;
  const imgContainer = createEle("div", "character");
  imgContainer.innerHTML = `<img src="${player.img}" alt="${player.name}">`;

  progressbarContainer.append(lifeContainer);
  progressbarContainer.append(nameContainer);
  playerContainer.append(progressbarContainer);
  playerContainer.append(imgContainer);

  return playerContainer;
}

const player1 = new Player(
  1,
  "SubZero",
  "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
);

const player2 = new Player(
  2,
  "Scorpion",
  "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
);

arenaBlock.append(createPlayer(player1));
arenaBlock.append(createPlayer(player2));

function getRandomDamage() {
  return Math.floor(Math.random() * 20) + 1;
}

function changeHP(player) {
  const playerLife = document.querySelector(`.player${player.type} .life`);
  player.hp -= getRandomDamage();
  playerLife.style.width = `${player.hp}%`;

  if (player.hp <= 0) {
    player.hp = 0;
    playerLife.style.width = `${player.hp}%`;
    btn.disabled = true;
    showWinner(player.type);
  }
}

function showWinner(playerType) {
  const title = createEle("div", "winTitle");
  title.textContent = `${(playerType === 2) ? player1.name : player2.name} wins`;
  arenaBlock.append(title);
}

btn.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});
