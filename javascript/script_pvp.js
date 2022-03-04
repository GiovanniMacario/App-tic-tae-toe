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
const turn = document.getElementById('turn');
const turn_x = document.getElementById("turnx");
const turn_o = document.getElementById("turno");
const restargame = document.getElementById("restar");
const screenrestar = document.getElementById("screenrestar");
const restarcancel = document.getElementById("cancelrestar");
const screeniconX = document.getElementById("screeniconx");
const screeniconO = document.getElementById("screenicono");

const hovero = document.getElementById('iconOhover')
const hoverx = document.getElementById('iconXhover')
const hovero2 = document.getElementById('iconO2hover')
const hoverx2 = document.getElementById('iconX2hover')
const hovero3 = document.getElementById('iconO3hover')
const hoverx3 = document.getElementById('iconX3hover')
const hovero4 = document.getElementById('iconO4hover')
const hoverx4 = document.getElementById('iconX4hover')
const hovero5 = document.getElementById('iconO5hover')
const hoverx5 = document.getElementById('iconX5hover')
const hovero6 = document.getElementById('iconO6hover')
const hoverx6 = document.getElementById('iconX6hover')
const hovero7 = document.getElementById('iconO7hover')
const hoverx7 = document.getElementById('iconX7hover')
const hovero8 = document.getElementById('iconO8hover')
const hoverx8 = document.getElementById('iconX8hover')
const hovero9 = document.getElementById('iconO9hover')
const hoverx9 = document.getElementById('iconX9hover')

const winx1 = document.getElementById('xwin1')
const winx2 = document.getElementById('xwin2')
const winx3 = document.getElementById('xwin3')
const winx4 = document.getElementById('xwin4')
const winx5 = document.getElementById('xwin5')
const winx6 = document.getElementById('xwin6')
const winx7 = document.getElementById('xwin7')
const winx8 = document.getElementById('xwin8')
const winx9 = document.getElementById('xwin9')

const wino1 = document.getElementById('owin1')
const wino2 = document.getElementById('owin2')
const wino3 = document.getElementById('owin3')
const wino4 = document.getElementById('owin4')
const wino5 = document.getElementById('owin5')
const wino6 = document.getElementById('owin6')
const wino7 = document.getElementById('owin7')
const wino8 = document.getElementById('owin8')
const wino9 = document.getElementById('owin9')

let bd = document.getElementById("board");
let player = 1;
let player1cont = 0;
let player2cont = 0;
let player1tie = 0;
let player2tie = 0;
let tiecont = 0;
let cpu = 0;

const fwinx = () =>{
  player1cont += 1;
  screenwin.classList.remove("hidden");
  scordp1.innerHTML = player1cont;
  textwiner.innerHTML = "PLAYER 1 WIN!";
  textRound.innerHTML = "TAKES THE ROUND ";
  textRound.classList.add("screenWin__textm--p1");
  textRound.classList.remove("screenWin__textm--p2");
  screeniconO.classList.add("hidden");
  screeniconX.classList.remove("hidden");
}

const fwinO = () =>{
  player2cont += 1;
  screenwin.classList.remove("hidden");
  scordp2.innerHTML = player2cont;
  textwiner.innerHTML = "PLAYER  2  WIN!";
  textRound.classList.add("screenWin__textm--p2");
  textRound.classList.remove("screenWin__textm--p1");
  screeniconO.classList.remove("hidden");
  screeniconX.classList.add("hidden");
  textRound.innerHTML = "TAKES THE ROUND ";
}

// console.log(cambio.target.setProperty('--player','#fff'));
bd.addEventListener("click", (e) => {
  if (player === 1) {
    if (e.target.classList.contains("grid__item")) {
      if (
        e.target.classList.contains("imgx") ||
        e.target.classList.contains("imgo")
      ) {
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
    if (e.target.classList.contains("grid__item")) {
      if (
        e.target.classList.contains("imgo") ||
        e.target.classList.contains("imgx")
      ) {
      } else {
        turn_x.classList.remove("hidden");
        turn_o.classList.add("hidden");
        const fragmentImg = document.createDocumentFragment();
        const img = document.createElement("img");
        img.src = "assets/icons/icon-o.svg";
        img.className = "icon-grid";
        fragmentImg.appendChild(img);
        e.target.appendChild(fragmentImg);
        e.target.classList.add("imgo");
        player = 1;
        player2tie += 1;
      }
    }
  }

  if(p1.classList.contains('imgx') && p2.classList.contains('imgx') && p3.classList.contains('imgx') ){
    winx1.classList.remove('hidden');
    winx2.classList.remove('hidden');
    winx3.classList.remove('hidden');
    p1.classList.add('grid__item--winx')
    p2.classList.add('grid__item--winx')
    p3.classList.add('grid__item--winx')
    fwinx();
    }
    else if( p4.classList.contains("imgx") && p5.classList.contains("imgx") && p6.classList.contains("imgx")){
      winx4.classList.remove('hidden');
      winx5.classList.remove('hidden');
      winx6.classList.remove('hidden');
      p4.classList.add('grid__item--winx')
      p5.classList.add('grid__item--winx')
      p6.classList.add('grid__item--winx')
    fwinx();

    }
    else if( p7.classList.contains("imgx") && p8.classList.contains("imgx") && p9.classList.contains("imgx")){
      winx7.classList.remove('hidden');
      winx8.classList.remove('hidden');
      winx9.classList.remove('hidden');
      p7.classList.add('grid__item--winx')
      p8.classList.add('grid__item--winx')
      p9.classList.add('grid__item--winx')
    fwinx();

    }
    else if( p1.classList.contains("imgx") && p4.classList.contains("imgx") && p7.classList.contains("imgx")){
      winx1.classList.remove('hidden');
      winx4.classList.remove('hidden');
      winx7.classList.remove('hidden');
      p1.classList.add('grid__item--winx')
      p4.classList.add('grid__item--winx')
      p7.classList.add('grid__item--winx')
    fwinx();

    }
    else if( p2.classList.contains("imgx") && p5.classList.contains("imgx") && p8.classList.contains("imgx")){
      winx2.classList.remove('hidden');
      winx5.classList.remove('hidden');
      winx8.classList.remove('hidden');
      p2.classList.add('grid__item--winx')
      p5.classList.add('grid__item--winx')
      p8.classList.add('grid__item--winx')
    fwinx();

    }
    else if( p3.classList.contains("imgx") && p6.classList.contains("imgx") && p9.classList.contains("imgx")){
      winx3.classList.remove('hidden');
      winx6.classList.remove('hidden');
      winx9.classList.remove('hidden');
      p3.classList.add('grid__item--winx')
      p6.classList.add('grid__item--winx')
      p9.classList.add('grid__item--winx')
    fwinx();

    }
    else if( p1.classList.contains("imgx") && p5.classList.contains("imgx") && p9.classList.contains("imgx")){
      winx1.classList.remove('hidden');
      winx5.classList.remove('hidden');
      winx9.classList.remove('hidden');
      p1.classList.add('grid__item--winx')
      p5.classList.add('grid__item--winx')
      p9.classList.add('grid__item--winx')
    fwinx();

    }
    else if( p3.classList.contains("imgx") && p5.classList.contains("imgx") && p7.classList.contains("imgx")){
      winx3.classList.remove('hidden');
      winx5.classList.remove('hidden');
      winx7.classList.remove('hidden');
      p3.classList.add('grid__item--winx')
      p5.classList.add('grid__item--winx')
      p7.classList.add('grid__item--winx')
    fwinx();
    } else if (player1tie === 5 && player2tie === 4) {
    screenwin.classList.remove("hidden");
    tiecont += 1;
    tie.innerHTML = tiecont;
    textwiner.innerHTML = "";
    textRound.innerHTML = "ROUND TIE";
    screeniconO.classList.add("hidden");
    screeniconX.classList.add("hidden");
  }
  // --- PLAYER WIN 2 --- 
  if(p1.classList.contains('imgo') && p2.classList.contains('imgo') && p3.classList.contains('imgo') ){
    wino1.classList.remove('hidden');
    wino2.classList.remove('hidden');
    wino3.classList.remove('hidden');
    p1.classList.add('grid__item--wino')
    p2.classList.add('grid__item--wino')
    p3.classList.add('grid__item--wino')
    fwinO();
    }
    else if( p4.classList.contains("imgo") && p5.classList.contains("imgo") && p6.classList.contains("imgo")){
      wino4.classList.remove('hidden');
      wino5.classList.remove('hidden');
      wino6.classList.remove('hidden');
      p4.classList.add('grid__item--wino')
      p5.classList.add('grid__item--wino')
      p6.classList.add('grid__item--wino')
    fwinO();


    }
    else if( p7.classList.contains("imgo") && p8.classList.contains("imgo") && p9.classList.contains("imgo")){
      wino7.classList.remove('hidden');
      wino8.classList.remove('hidden');
      wino9.classList.remove('hidden');
      p7.classList.add('grid__item--wino')
      p8.classList.add('grid__item--wino')
      p9.classList.add('grid__item--wino')
    fwinO();

    }
    else if( p1.classList.contains("imgo") && p4.classList.contains("imgo") && p7.classList.contains("imgo")){
      wino1.classList.remove('hidden');
      wino4.classList.remove('hidden');
      wino7.classList.remove('hidden');
      p1.classList.add('grid__item--wino')
      p4.classList.add('grid__item--wino')
      p7.classList.add('grid__item--wino')
    fwinO();
    }
    else if( p2.classList.contains("imgo") && p5.classList.contains("imgo") && p8.classList.contains("imgo")){
      wino2.classList.remove('hidden');
      wino5.classList.remove('hidden');
      wino8.classList.remove('hidden');
      p2.classList.add('grid__item--wino')
      p5.classList.add('grid__item--wino')
      p8.classList.add('grid__item--wino')

    fwinO();


    }
    else if( p3.classList.contains("imgo") && p6.classList.contains("imgo") && p9.classList.contains("imgo")){
      wino3.classList.remove('hidden');
      wino6.classList.remove('hidden');
      wino9.classList.remove('hidden');
      p3.classList.add('grid__item--wino')
      p6.classList.add('grid__item--wino')
      p9.classList.add('grid__item--wino')

    fwinO();

    }
    else if( p1.classList.contains("imgo") && p5.classList.contains("imgo") && p9.classList.contains("imgo")){
      wino1.classList.remove('hidden');
      wino5.classList.remove('hidden');
      wino9.classList.remove('hidden');
      p1.classList.add('grid__item--wino')
      p5.classList.add('grid__item--wino')
      p9.classList.add('grid__item--wino')

      
    fwinO();

    }
    else if( p3.classList.contains("imgo") && p5.classList.contains("imgo") && p7.classList.contains("imgo")){
      wino3.classList.remove('hidden');
      wino5.classList.remove('hidden');
      wino7.classList.remove('hidden');
      p3.classList.add('grid__item--wino')
      p5.classList.add('grid__item--wino')
      p7.classList.add('grid__item--wino')

    fwinO();
    } else if (player2tie === 5 && player1tie === 4) {
    screenwin.classList.remove("hidden");
    tiecont += 1;
    tie.innerHTML = tiecont;
    textwiner.innerHTML = "";
    textRound.innerHTML = "ROUND TIE";
    screeniconO.classList.add("hidden");
    screeniconX.classList.add("hidden");
  }
});


p1.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p1.classList.contains("imgx") || p1.classList.contains("imgo")) {}
    else{
      hoverx.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p1.classList.contains("imgx") || p1.classList.contains("imgo")) {}
    else{
      hovero.classList.remove('hidden')
    }
  }
})


p1.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p1.classList.contains("imgx") || p1.classList.contains("imgo")) 
    {}
    else{
      hoverx.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p1.classList.contains("imgx") || p1.classList.contains("imgo")) 
    {}
    else{
      hovero.classList.add('hidden')
    }
  }
})

p2.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p2.classList.contains("imgx") || p2.classList.contains("imgo")) {}
    else{
      hoverx2.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p2.classList.contains("imgx") || p2.classList.contains("imgo")) {}
    else{
      hovero2.classList.remove('hidden')
    }
  }
})

p2.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p2.classList.contains("imgx") || p2.classList.contains("imgo")) 
    {}
    else{
      hoverx2.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p2.classList.contains("imgx") || p2.classList.contains("imgo")) 
    {}
    else{
      hovero2.classList.add('hidden')
    }
  }
})

p3.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p3.classList.contains("imgx") || p3.classList.contains("imgo")) {}
    else{
      hoverx3.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p3.classList.contains("imgx") || p3.classList.contains("imgo")) {}
    else{
      hovero3.classList.remove('hidden')
    }
  }
})

p3.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p3.classList.contains("imgx") || p3.classList.contains("imgo")) 
    {}
    else{
      hoverx3.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p3.classList.contains("imgx") || p3.classList.contains("imgo")) 
    {}
    else{
      hovero3.classList.add('hidden')
    }
  }
})

p4.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p4.classList.contains("imgx") || p4.classList.contains("imgo")) {}
    else{
      hoverx4.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p4.classList.contains("imgx") || p4.classList.contains("imgo")) {}
    else{
      hovero4.classList.remove('hidden')
    }
  }
})

p4.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p4.classList.contains("imgx") || p4.classList.contains("imgo")) 
    {}
    else{
      hoverx4.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p4.classList.contains("imgx") || p4.classList.contains("imgo")) 
    {}
    else{
      hovero4.classList.add('hidden')
    }
  }
})

p5.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p5.classList.contains("imgx") || p5.classList.contains("imgo")) {}
    else{
      hoverx5.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p5.classList.contains("imgx") || p5.classList.contains("imgo")) {}
    else{
      hovero5.classList.remove('hidden')
    }
  }
})

p5.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p5.classList.contains("imgx") || p5.classList.contains("imgo")) 
    {}
    else{
      hoverx5.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p5.classList.contains("imgx") || p5.classList.contains("imgo")) 
    {}
    else{
      hovero5.classList.add('hidden')
    }
  }
})

p6.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p6.classList.contains("imgx") || p6.classList.contains("imgo")) {}
    else{
      hoverx6.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p6.classList.contains("imgx") || p6.classList.contains("imgo")) {}
    else{
      hovero6.classList.remove('hidden')
    }
  }
})

p6.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p6.classList.contains("imgx") || p6.classList.contains("imgo")) 
    {}
    else{
      hoverx6.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p6.classList.contains("imgx") || p6.classList.contains("imgo")) 
    {}
    else{
      hovero6.classList.add('hidden')
    }
  }
})

p7.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p7.classList.contains("imgx") || p7.classList.contains("imgo")) {}
    else{
      hoverx7.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p7.classList.contains("imgx") || p7.classList.contains("imgo")) {}
    else{
      hovero7.classList.remove('hidden')
    }
  }
})

p7.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p7.classList.contains("imgx") || p7.classList.contains("imgo")) 
    {}
    else{
      hoverx7.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p7.classList.contains("imgx") || p7.classList.contains("imgo")) 
    {}
    else{
      hovero7.classList.add('hidden')
    }
  }
})

p8.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p8.classList.contains("imgx") || p8.classList.contains("imgo")) {}
    else{
      hoverx8.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p8.classList.contains("imgx") || p8.classList.contains("imgo")) {}
    else{
      hovero8.classList.remove('hidden')
    }
  }
})

p8.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p8.classList.contains("imgx") || p8.classList.contains("imgo")) 
    {}
    else{
      hoverx8.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p8.classList.contains("imgx") || p8.classList.contains("imgo")) 
    {}
    else{
      hovero8.classList.add('hidden')
    }
  }
})

p9.addEventListener('mouseover', () =>{
  if (player === 1) {
    if (p9.classList.contains("imgx") || p9.classList.contains("imgo")) {}
    else{
      hoverx9.classList.remove('hidden');
    }
  }
  if (player === 2) {
    if (p9.classList.contains("imgx") || p9.classList.contains("imgo")) {}
    else{
      hovero9.classList.remove('hidden')
    }
  }
})

p9.addEventListener('mouseout', () =>{
  if (player === 1) {
    if (p9.classList.contains("imgx") || p9.classList.contains("imgo")) 
    {}
    else{
      hoverx9.classList.add('hidden')
    }
  }
  if (player === 2) {
    if (p9.classList.contains("imgx") || p9.classList.contains("imgo")) 
    {}
    else{
      hovero9.classList.add('hidden')
    }
  }
})


nextround.addEventListener("click", () => {
  player1tie = 0;
  player2tie = 0;
  turn_x.classList.remove("hidden");
  turn_o.classList.add("hidden");
  if (p1.classList.contains("imgx") || p1.classList.contains("imgo")) {
    p1.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p1.removeChild(p1.lastElementChild);
  }
  if (p2.classList.contains("imgx") || p2.classList.contains("imgo")) {
    p2.classList.remove("imgx", "imgo", 'grid__item--winx','grid__item--wino');
    p2.removeChild(p2.lastElementChild);
  }
  if (p3.classList.contains("imgx") || p3.classList.contains("imgo")) {
    p3.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p3.removeChild(p3.lastElementChild);
  }
  if (p4.classList.contains("imgx") || p4.classList.contains("imgo")) {
    p4.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p4.removeChild(p4.lastElementChild);
  }
  if (p5.classList.contains("imgx") || p5.classList.contains("imgo")) {
    p5.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p5.removeChild(p5.lastElementChild);
  }

  if (p6.classList.contains("imgx") || p6.classList.contains("imgo")) {
    p6.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p6.removeChild(p6.lastElementChild);
  }
  if (p7.classList.contains("imgx") || p7.classList.contains("imgo")) {
    p7.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p7.removeChild(p7.lastElementChild);
  }
  if (p8.classList.contains("imgx") || p8.classList.contains("imgo")) {
    p8.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p8.removeChild(p8.lastElementChild);
  }
  if (p9.classList.contains("imgx") || p9.classList.contains("imgo")) {
    p9.classList.remove("imgx", "imgo",'grid__item--winx','grid__item--wino');
    p9.removeChild(p9.lastElementChild);
  }
  screenwin.classList.add("hidden");
  hovero.classList.add('hidden')
  hoverx.classList.add('hidden');
  hovero2.classList.add('hidden') 
  hoverx2.classList.add('hidden') 
  hovero3.classList.add('hidden') 
  hoverx3.classList.add('hidden') 
  hovero4.classList.add('hidden') 
  hoverx4.classList.add('hidden') 
  hovero5.classList.add('hidden') 
  hoverx5.classList.add('hidden') 
  hovero6.classList.add('hidden') 
  hoverx6.classList.add('hidden') 
  hovero7.classList.add('hidden') 
  hoverx7.classList.add('hidden') 
  hovero8.classList.add('hidden') 
  hoverx8.classList.add('hidden') 
  hovero9.classList.add('hidden') 
  hoverx9.classList.add('hidden') 
  winx1.classList.add('hidden')
  winx2.classList.add('hidden')
  winx3.classList.add('hidden')
  winx4.classList.add('hidden')
  winx5.classList.add('hidden')
  winx6.classList.add('hidden')
  winx7.classList.add('hidden')
  winx8.classList.add('hidden')
  winx9.classList.add('hidden')
  wino1.classList.add('hidden')
  wino2.classList.add('hidden')
  wino3.classList.add('hidden')
  wino4.classList.add('hidden')
  wino5.classList.add('hidden')
  wino6.classList.add('hidden')
  wino7.classList.add('hidden')
  wino8.classList.add('hidden')
  wino9.classList.add('hidden')

  player = 1;
});

restargame.addEventListener("click", () => {
  screenrestar.classList.remove("hidden");
});

restarcancel.addEventListener("click", () => {
  screenrestar.classList.add("hidden");
});
