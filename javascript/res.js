const p1 = document.getElementById("position1");
const p2 = document.getElementById("position2");
const p3 = document.getElementById("position3");
const p4 = document.getElementById("position4");
const p5 = document.getElementById("position5");
const p6 = document.getElementById("position6");
const p7 = document.getElementById("position7");
const p8 = document.getElementById("position8");
const p9 = document.getElementById("position9");
const textwiner = document.getElementById("textwin");
const textRound = document.getElementById("textround");
const screenwin = document.getElementById("win");
const nextround = document.getElementById("round");
const scordp1 = document.getElementById("player1");
const scordp2 = document.getElementById("player2");
const tie = document.getElementById("ties");
const turn_x = document.getElementById("turnx");
const turn_o = document.getElementById("turno");
const restargame = document.getElementById("restar");
const screenrestar = document.getElementById("screenrestar");
const restarcancel = document.getElementById("cancelrestar");
const screeniconX = document.getElementById("screeniconx");
const screeniconO = document.getElementById("screenicono");
const xo = document.getElementById("iconx-outline");
const oo = document.getElementById("icono-outline");
const bluscore = document.getElementById("scoreB");
const yellowscore = document.getElementById("scoreY");
let bd = document.getElementById("board");
let player = 1;
let player1cont = 0;
let player2cont = 0;
let player1tie = 0;
let player2tie = 0;
let tiecont = 0;
let cpu = 0;
let obj = {
  1: p1,
  2: p2,
  3: p3,
  4: p4,
  5: p5,
  6: p6,
  7: p7,
  8: p8,
  9: p9,
};

let veriplayerX = localStorage.getItem("x");
let veriplayerO = localStorage.getItem("o");
let randon = Math.floor(Math.random() * (9 - 1) + 1);
let n = 1;
let c2f1 = 1;
let c2f2 = 1;
let c1f3 = 1;
let c1f2 = 1;
let c1f4 = 1;
let play2 = 1;

const randoncpu = (num) => {
  do {
    if (
      obj[num].classList.contains("imgx") ||
      obj[num].classList.contains("imgo")
    ) {
      let randon2 = Math.floor(Math.random() * (9 - 1) + 1);
      num = randon2;
    } else {
      const fragmentImg = document.createDocumentFragment();
      const img = document.createElement("img");
      img.src = "assets/icons/icon-o.svg";
      img.className = "icon-grid";
      fragmentImg.appendChild(img);
      element = randon.toString();
      obj[num].appendChild(fragmentImg);
      obj[num].classList.add("imgo");
      turn_x.classList.remove("hidden");
      turn_o.classList.add("hidden");
      player = 1;
      player2tie += 1;
    }
  } while (player != 1);
};

const randoncpuO = (num = randon, randon) => {
  do {
    if (
      obj[num].classList.contains("imgx") ||
      obj[num].classList.contains("imgo")
    ) {
      let randon2 = Math.floor(Math.random() * (9 - 1) + 1);
      console.log("Randon: ", randon2);
      num = randon2;
    } else {
      const fragmentImg = document.createDocumentFragment();
      const img = document.createElement("img");
      img.src = "assets/icons/icon-x.svg";
      img.className = "icon-grid";
      fragmentImg.appendChild(img);
      obj[num].appendChild(fragmentImg);
      obj[num].classList.add("imgx");
      player = 2;
      player1tie += 1;
    }
    console.log("Playerf: ", player);
  } while (player != 2);
};

if (Number(veriplayerO) === 2) {
  window.onload = randoncpuO(randon);
  bluscore.innerHTML = "CPU";
  yellowscore.innerHTML = "Player";
}

bd.addEventListener("click", (e) => {
  if (Number(veriplayerX) === 1) {
    if (player === 1) {
      console.log("Player 1");
      if (e.target.classList.contains("grid__item")) {
        if (
          e.target.classList.contains("imgx") ||
          e.target.classList.contains("imgo")
        ) {
          console.log("Ya tiene clase X");
        } else {
          turn_x.classList.add("hidden");
          turn_o.classList.remove("hidden");
          const fragmentImg = document.createDocumentFragment();
          const img = document.createElement("img");
          img.src = "assets/icons/icon-x.svg";
          img.className = "icon-grid";
          fragmentImg.appendChild(img);
          e.target.appendChild(fragmentImg);
          e.target.classList.add("imgx");
          player = 2;
          player1tie += 1;
        }
      }
    }
    if (player === 2) {
      let randon = Math.floor(Math.random() * (9 - 1) + 1);
      if (player1tie === 5 && player2tie === 4) {
        console.log("Espacios LLenos playerTie 1!!!");
      } else {
        if (
          p1.classList.contains("imgx") &&
          p3.classList.contains("imgx") &&
          c2f1 === 1
        ) {
          setTimeout(function () {
            return randoncpu(2);
          }, 800);
          c2f1 = 0;
        } else if (
          p1.classList.contains("imgx") &&
          p2.classList.contains("imgx") &&
          c2f1 === 1
        ) {
          setTimeout(function () {
            return randoncpu(3);
          }, 800);
          c2f1 = 0;
        } else if (
          p3.classList.contains("imgx") &&
          p2.classList.contains("imgx") &&
          c2f1 === 1
        ) {
          c2f1 = 0;
          setTimeout(function () {
            return randoncpu(1);
          }, 800);
        } else if (
          p1.classList.contains("imgx") &&
          p9.classList.contains("imgx") &&
          c2f2 === 1
        ) {
          c2f2 = 0;
          setTimeout(function () {
            return randoncpu(5);
          }, 800);
        } else if (
          p1.classList.contains("imgx") &&
          p5.classList.contains("imgx") &&
          c2f2 === 1
        ) {
          c2f2 = 0;
          setTimeout(function () {
            return randoncpu(9);
          }, 800);
        } else if (
          p3.classList.contains("imgx") &&
          p7.classList.contains("imgx") &&
          c1f3 === 1
        ) {
          c1f3 = 0;
          setTimeout(function () {
            return randoncpu(5);
          }, 800);
        } else if (
          p3.classList.contains("imgx") &&
          p5.classList.contains("imgx") &&
          c1f3 === 1
        ) {
          c1f3 = 0;
          setTimeout(function () {
            return randoncpu(7);
          }, 800);
        }else if(p4.classList.contains('imgx') && p5.classList.contains('imgx')){
          c1f2 = 0;
          setTimeout(function () {return randoncpu(6);}, 800);
        } 
        else if(p4.classList.contains('imgx') && p6.classList.contains('imgx')){
          c1f2 = 0;
          setTimeout(function () {return randoncpu(5);}, 800);
        } 
        else if(p6.classList.contains('imgx') && p5.classList.contains('imgx')){
          c1f2 = 0;
          setTimeout(function () {return randoncpu(4);}, 800);
        } 
        else if(p7.classList.contains('imgx') && p8.classList.contains('imgx')){
          c1f4 = 0;
          setTimeout(function () {return randoncpu(9);}, 800);
        } 
        else if(p7.classList.contains('imgx') && p9.classList.contains('imgx')){
          c1f4 = 0;
          setTimeout(function () {return randoncpu(8);}, 800);
        } 
        else if(p7.classList.contains('imgx') && p9.classList.contains('imgx')){
          c1f4 = 0;
          setTimeout(function () {return randoncpu(7);}, 800);
        } 
      
        else {
          console.log("Randon Add");
          setTimeout(function () {
            return randoncpu(randon);
          }, 800);
        }
      }
    }
  }

  if (Number(veriplayerO) === 2) {
    if (player === 2) {
      console.log("Playing O");
      if (e.target.classList.contains("grid__item")) {
        if (
          e.target.classList.contains("imgx") ||
          e.target.classList.contains("imgo")
        ) {
          console.log("Ya tiene clase ");
        } else {
          // turn_x.classList.add("hidden");
          // turn_o.classList.remove("hidden");
          const fragmentImg = document.createDocumentFragment();
          const img = document.createElement("img");
          img.src = "assets/icons/icon-o.svg";
          img.className = "icon-grid";
          fragmentImg.appendChild(img);
          e.target.appendChild(fragmentImg);
          e.target.classList.add("imgo");
          player = 1;
          player2tie += 1;
          console.log("Player 0: ", player);
        }
      }
    }
    if (player === 1) {
      console.log("Jugando CPU O");
      console.log("Player: ", player);
      let randon = Math.floor(Math.random() * (9 - 1) + 1);
      if (
        (player2tie === 5 && player1tie === 4) ||
        (player1tie === 5 && player2cont === 4)
      ) {
        console.log("Espacios LLenos playerTie 1!!!");
      } else {
        if (
          p1.classList.contains("imgo") &&
          p3.classList.contains("imgo") &&
          c2f1 === 1
        ) {
          randoncpuO(2);
          c2f1 = 0;
        } else if (
          p1.classList.contains("imgo") &&
          p2.classList.contains("imgo") &&
          c2f1 === 1
        ) {
          randoncpuO(3);
          c2f1 = 0;
        } else if (
          p3.classList.contains("imgo") &&
          p2.classList.contains("imgo") &&
          c2f1 === 1
        ) {
          randoncpuO(1);
          c2f1 = 0;
        } else if (
          p1.classList.contains("imgo") &&
          p9.classList.contains("imgo") &&
          c2f2 === 1
        ) {
          randoncpuO(5);
          c2f2 = 0;
        } else if (
          p1.classList.contains("imgo") &&
          p5.classList.contains("imgo") &&
          c2f2 === 1
        ) {
          randoncpuO(9);
          c2f2 = 0;
        } else if (
          p3.classList.contains("imgo") &&
          p7.classList.contains("imgo") &&
          c1f3 === 1
        ) {
          randoncpuO(5);
          c1f3 = 0;
          console.log("ADD cpu Columna 2 fila 1");
        } else if (
          p3.classList.contains("imgo") &&
          p5.classList.contains("imgo") &&
          c1f3 === 1
        ) {
          randoncpuO(7);
          c1f3 = 0;
          console.log("ADD cpu Columna 2 fila 1");
        } else {
          console.log("Add Randon");
          console.log("c2f1: ", c2f1);
          // window.setTimeout(randoncpu(randon),5000)
          randoncpuO(randon);
        }
      }
    }
  }

  setTimeout(() => {
    if (
      (p1.classList.contains("imgx") &&
        p2.classList.contains("imgx") &&
        p3.classList.contains("imgx")) ||
      (p4.classList.contains("imgx") &&
        p5.classList.contains("imgx") &&
        p6.classList.contains("imgx")) ||
      (p7.classList.contains("imgx") &&
        p8.classList.contains("imgx") &&
        p9.classList.contains("imgx")) ||
      (p1.classList.contains("imgx") &&
        p4.classList.contains("imgx") &&
        p7.classList.contains("imgx")) ||
      (p2.classList.contains("imgx") &&
        p5.classList.contains("imgx") &&
        p8.classList.contains("imgx")) ||
      (p3.classList.contains("imgx") &&
        p6.classList.contains("imgx") &&
        p9.classList.contains("imgx")) ||
      (p1.classList.contains("imgx") &&
        p5.classList.contains("imgx") &&
        p9.classList.contains("imgx")) ||
      (p3.classList.contains("imgx") &&
        p5.classList.contains("imgx") &&
        p7.classList.contains("imgx"))
    ) {
      console.log("GANADOR JUGADOR 1");
      player1cont += 1;
      if (Number(veriplayerX) === 1) {
        screenwin.classList.remove("hidden");
        scordp1.innerHTML = player1cont;
        textwiner.innerHTML = "PLAYER  WIN!";
        textRound.innerHTML = "TAKES THE ROUND ";
        textRound.classList.add("screenWin__textm--p1");
        textRound.classList.remove("screenWin__textm--p2");
        screeniconO.classList.add("hidden");
        screeniconX.classList.remove("hidden");
      }
      if (Number(veriplayerO) === 2) {
        screenwin.classList.remove("hidden");
        scordp1.innerHTML = player1cont;
        textwiner.innerHTML = "CPU  WIN!";
        textRound.innerHTML = "TAKES THE ROUND ";
        textRound.classList.add("screenWin__textm--p1");
        textRound.classList.remove("screenWin__textm--p2");
        screeniconO.classList.add("hidden");
        screeniconX.classList.remove("hidden");
      }
    } else if (player1tie === 5 && player2tie === 4) {
      screenwin.classList.remove("hidden");
      tiecont += 1;
      tie.innerHTML = tiecont;
      console.log("Empate desde X");
      textwiner.innerHTML = "";
      textRound.innerHTML = "ROUND TIE";
      screeniconO.classList.add("hidden");
      screeniconX.classList.add("hidden");
    }
    console.log("Comprovacion en img 0 Ganador !");
    if (
      (p1.classList.contains("imgo") &&
        p2.classList.contains("imgo") &&
        p3.classList.contains("imgo")) ||
      (p4.classList.contains("imgo") &&
        p5.classList.contains("imgo") &&
        p6.classList.contains("imgo")) ||
      (p7.classList.contains("imgo") &&
        p8.classList.contains("imgo") &&
        p9.classList.contains("imgo")) ||
      (p1.classList.contains("imgo") &&
        p4.classList.contains("imgo") &&
        p7.classList.contains("imgo")) ||
      (p2.classList.contains("imgo") &&
        p5.classList.contains("imgo") &&
        p8.classList.contains("imgo")) ||
      (p3.classList.contains("imgo") &&
        p6.classList.contains("imgo") &&
        p9.classList.contains("imgo")) ||
      (p1.classList.contains("imgo") &&
        p5.classList.contains("imgo") &&
        p9.classList.contains("imgo")) ||
      (p3.classList.contains("imgo") &&
        p5.classList.contains("imgo") &&
        p7.classList.contains("imgo"))
    ) {
      console.log("Ganador 0");
      player2cont += 1;
      if (Number(veriplayerO) === 2) {
        console.log("GANADOR JUGADOR 2");
        console.log("Contador Player 1: ", player2cont);
        screenwin.classList.remove("hidden");
        scordp2.innerHTML = player2cont;
        textwiner.innerHTML = "PLAYER WIN!";
        textRound.classList.add("screenWin__textm--p2");
        textRound.classList.remove("screenWin__textm--p1");
        screeniconO.classList.remove("hidden");
        screeniconX.classList.add("hidden");
        textRound.innerHTML = "TAKES THE ROUND ";
      }
      if (Number(veriplayerX) === 1) {
        console.log("GANADOR JUGADOR 2");
        console.log("Contador Player 1: ", player2cont);
        screenwin.classList.remove("hidden");
        scordp2.innerHTML = player2cont;
        textwiner.innerHTML = "CPU WIN!";
        textRound.classList.add("screenWin__textm--p2");
        textRound.classList.remove("screenWin__textm--p1");
        screeniconO.classList.remove("hidden");
        screeniconX.classList.add("hidden");
        textRound.innerHTML = "TAKES THE ROUND ";
      }
    } else if (player2tie === 5 && player1tie === 4) {
      screenwin.classList.remove("hidden");
      tiecont += 1;
      tie.innerHTML = tiecont;
      console.log("Empate desde O");
      textwiner.innerHTML = "";
      textRound.innerHTML = "ROUND TIE";
      screeniconO.classList.add("hidden");
      screeniconX.classList.add("hidden");
    }
  }, 800);
  console.log("Final BLOQUE");
});

nextround.addEventListener("click", () => {
  player1tie = 0;
  player2tie = 0;
  turn_x.classList.remove("hidden");
  turn_o.classList.add("hidden");
  if (p1.classList.contains("imgx") || p1.classList.contains("imgo")) {
    p1.classList.remove("imgx", "imgo");
    p1.removeChild(p1.lastElementChild);
    p1.classList.remove("grid__item--winx");
  }
  if (p2.classList.contains("imgx") || p2.classList.contains("imgo")) {
    p2.classList.remove("imgx", "imgo");
    p2.removeChild(p2.firstElementChild);
  }
  if (p3.classList.contains("imgx") || p3.classList.contains("imgo")) {
    p3.classList.remove("imgx", "imgo");
    p3.removeChild(p3.firstElementChild);
  }
  if (p4.classList.contains("imgx") || p4.classList.contains("imgo")) {
    p4.classList.remove("imgx", "imgo");
    p4.removeChild(p4.firstElementChild);
  }
  if (p5.classList.contains("imgx") || p5.classList.contains("imgo")) {
    p5.classList.remove("imgx", "imgo");
    p5.removeChild(p5.firstElementChild);
  }

  if (p6.classList.contains("imgx") || p6.classList.contains("imgo")) {
    p6.classList.remove("imgx", "imgo");
    p6.removeChild(p6.firstElementChild);
  }
  if (p7.classList.contains("imgx") || p7.classList.contains("imgo")) {
    p7.classList.remove("imgx", "imgo");
    p7.removeChild(p7.firstElementChild);
  }
  if (p8.classList.contains("imgx") || p8.classList.contains("imgo")) {
    p8.classList.remove("imgx", "imgo");
    p8.removeChild(p8.firstElementChild);
  }
  if (p9.classList.contains("imgx") || p9.classList.contains("imgo")) {
    p9.classList.remove("imgx", "imgo");
    p9.removeChild(p9.firstElementChild);
  }

  screenwin.classList.add("hidden");
  player = 1;
  if (Number(veriplayerO) === 2) {
    randoncpuO(randon);
  }
});

restargame.addEventListener("click", () => {
  screenrestar.classList.remove("hidden");
});

restarcancel.addEventListener("click", () => {
  screenrestar.classList.add("hidden");
});
