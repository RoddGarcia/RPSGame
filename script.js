var menuOpen = false;
var playerChoose = false;
var audio = new Audio("./click.mp3");
let wrong = new Audio("./bruh.mp3");
let correct = new Audio("./yeah!.mp3");

var randomTime = Math.floor(Math.random() * 3) * 1000;

const numeroAleatorio = () => {
  return Math.floor(Math.random() * 3);
};

const paper = [
  '<button class="btn-choice btn-paper"> <span class="base">   <img     class="choice"     id="paper"     src="./images/icon-paper.svg"     alt="paper"   /> </span> </button>',
];

const scissors = [
  '</button><button class="btn-choice btn-scissors" >  <span class="base">    <img      class="choice"      src="./images/icon-scissors.svg"      alt="Scissors"      id="scissors"    />  </span></button>',
];

const rock = [
  ' <button class="btn-choice btn-rock" ><span class="base">  <img    class="choice"    id="rock"    src="./images/icon-rock.svg"    alt="rock"  /></span></button>',
];

const toggleMenu = () => {
  if (menuOpen === false && playerChoose === false) {
    document.querySelector("container").style.display = "flex";
    document.getElementById("rules").style.display = "none";
    menuOpen = true;
    audio.play();
  } else {
    document.querySelector("container").style.display = "none";
    document.getElementById("post").style.display = "none";
    document.getElementById("rules").style.display = "flex";
    menuOpen = false;
    audio.play();
  }
};

const playerChoice = (x) => {
  let player = x;

  document.getElementById("game").style.display = "none";
  document.getElementById("post").style.display = "flex";
  document.getElementById("rules").style.display = "none";

  if (x === 0) {
    document.getElementById("playerChoice").innerHTML = rock;
  }
  if (x === 1) {
    document.getElementById("playerChoice").innerHTML = paper;
  }
  if (x === 2) {
    document.getElementById("playerChoice").innerHTML = scissors;
  }

  audio.play();
  setTimeout(() => {
    gameStart(player);
  }, 2000);
};

const gameStart = (player) => {
  document.getElementById("end").style.display = "flex";
  var pc = numeroAleatorio(); /* PC chooses his option */
  document.getElementById("housePickBase").style.opacity = 100;
  document.getElementById("housePickBase").style.backgroundColor = "white";
  if (pc === 0) {
    document.getElementById("housePickBase").innerHTML = rock;
  }
  if (pc === 1) {
    document.getElementById("housePickBase").innerHTML = paper;
  }
  if (pc === 2) {
    document.getElementById("housePickBase").innerHTML = scissors;
  }
  verifyResult(pc, player);
};

let score = 0;
const verifyResult = (pc, player) => {
  if (player === 0) {
    if (pc === 0) {
      console.log("empate");
      document.getElementById("winner").innerHTML = "DRAW";
    } else if (pc === 1) {
      console.log("pc win");

      document.getElementById("winner").innerHTML = "YOU LOST";
      wrong.play();
    } else if (pc === 2) {
      console.log("player win");
      document.getElementById("winner").innerHTML = "YOU WIN";
      correct.play();

      score += 1;
    }
  }

  if (player === 1) {
    if (pc === 0) {
      console.log("player win");
      document.getElementById("winner").innerHTML = "YOU WIN";
      correct.play();
      score += 1;
    } else if (pc === 1) {
      console.log("empate");
      document.getElementById("winner").innerHTML = "DRAW";
    } else if (pc === 2) {
      console.log("pc win");
      document.getElementById("winner").innerHTML = "YOU LOST";
      wrong.play();
    }
  }

  if (player === 2) {
    if (pc === 0) {
      console.log("pc win");
      document.getElementById("winner").innerHTML = "YOU LOST";
      wrong.play();
    } else if (pc === 1) {
      console.log("player win");
      document.getElementById("winner").innerHTML = "YOU WIN";
      correct.play();
      score += 1;
    } else if (pc === 2) {
      console.log("empate");
      document.getElementById("winner").innerHTML = "DRAW";
    }
  }
  document.getElementById("scoreNumber").innerHTML = score;
  console.log("Score: " + score);
  document.getElementById("end").style.display = "flex";
};

const playAgain = () => {
  audio.play();
  document.getElementById("post").style.display = "none";
  document.getElementById("end").style.display = "none";
  document.getElementById("game").style.display = "flex";
  document.getElementById("rules").style.display = "flex";
  document.getElementById("housePickBase").style.opacity = "20%";
  document.getElementById("housePickBase").style.backgroundColor = "black";
  document.getElementById("housePickBase").innerHTML = 0;
};
