

var q=2;
function run1(){
if(q%2==0){
GetRandom1();
q=q+1;
}


}
function run2(){
    if(q%2!==0){
    GetRandom2();
    }
    q=2;
    }

document.querySelectorAll("bUtton")[0].addEventListener("click", run1);
document.querySelectorAll("bUtton")[1].addEventListener("click", run2);

//onClick Function
// document.querySelectorAll("bUtton")[0].addEventListener("click", GetRandom1);
// document.querySelectorAll("bUtton")[1].addEventListener("click", GetRandom2);

// $(button).onClick(function(){
//   $(`#${1}`).removeClass("Pawn2");
// });
// // $(`#${1}`).addClass("blackPawn");
var audio1 = new Audio("chin_tapak_dum_dum.mp3");
var onLadder = new Audio("On Ladder.mp3");
var onSnake = new Audio("On Snake.mp3");

//For alternate coloring for div
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    var a = document.getElementById(`${i}`);
    $(a).addClass("color2");
  } else {
    var a = document.getElementById(`${i}`);
    $(a).addClass("color3");
  }
}
// To get Random Number and Move
i = 0;

function GetRandom1() {
  document.querySelectorAll("img")[0].classList.add("button-clicked");

  randomNumber1 = Math.random() * 6 + 1;
  randomNumber1 = Math.floor(randomNumber1);
  console.log(randomNumber1);

  // j=i+randomNumber1;

  j = i + randomNumber1;
  if (j < 101) {
    
 
  switch (j) {
    case 4:
      $(`#${25}`).addClass("brownPawn");
      $(`#${4}`).removeClass("brownPawn");
      $(`#${4 - randomNumber1}`).removeClass("brownPawn");
      $(`#${1}`).removeClass("brownPawn");
      onLadder.play();
      i = 25;
    //   i = 25 - randomNumber1;
      break;
    case 21:
      $(`#${42}`).addClass("brownPawn");
      $(`#${21}`).removeClass("brownPawn");
      $(`#${21 - randomNumber1}`).removeClass("brownPawn");
      onLadder.play();
      i = 42;
      break;
    case 32:
      $(`#${7}`).addClass("brownPawn");
      $(`#${32}`).removeClass("brownPawn");
      $(`#${32 - randomNumber1}`).removeClass("brownPawn");
      onSnake.play();
      i = 7;
      break;
    case 33:
      $(`#${75}`).addClass("brownPawn");
      $(`#${33}`).removeClass("brownPawn");
      $(`#${33 - randomNumber1}`).removeClass("brownPawn");
      onSnake.play();
      i = 75;
      break;
    case 58:
      $(`#${35}`).addClass("brownPawn");
      $(`#${58}`).removeClass("brownPawn");
      $(`#${58 - randomNumber1}`).removeClass("brownPawn");
      onSnake.play();
      i = 35;
      break;
    case 63:
      $(`#${80}`).addClass("brownPawn");
      $(`#${63}`).removeClass("brownPawn");
      $(`#${63 - randomNumber1}`).removeClass("brownPawn");
      onLadder.play();
      i = 80;
      break;
    case 88:
      $(`#${70}`).addClass("brownPawn");
      $(`#${88}`).removeClass("brownPawn");
      $(`#${88 - randomNumber1}`).removeClass("brownPawn");
      onSnake.play();
      i = 70;
      break;
    case 87:
      $(`#${94}`).addClass("brownPawn");
      $(`#${87}`).removeClass("brownPawn");
      $(`#${87 - randomNumber1}`).removeClass("brownPawn");
      onLadder.play();
      i = 94;
      break;
    case 96:
      $(`#${18}`).addClass("brownPawn");
      $(`#${96}`).removeClass("brownPawn");
      $(`#${96 - randomNumber1}`).removeClass("brownPawn");
      onSnake.play();
      i = 18;
      break;
    case 99:
      $(`#${60}`).addClass("brownPawn");
      $(`#${99}`).removeClass("brownPawn");
      $(`#${99 - randomNumber1}`).removeClass("brownPawn");
      onSnake.play();
      i = 60;
      break;
    case 100:
      $(`#${100 - randomNumber1}`).removeClass("brownPawn");
      audio1.play();
      setTimeout(winner1, 1000);
      // alert("Plyer 1 is winner");

      break;

    default:
      break;
  }
  if(j!=4 && j!=21 && j!=32 && j!=33 && j!=58 && j!=63 && j!=88 && j!=87 && j!=96 &&j!=99){
  switch (randomNumber1) {
    case 1:
      setTimeout(move1, 250);
      break;
    case 2:
      setTimeout(move1, 250);
      setTimeout(move1, 500);
      break;
    case 3:
      setTimeout(move1, 250);
      setTimeout(move1, 500);
      setTimeout(move1, 750);
      break;
    case 4:
      setTimeout(move1, 250);
      setTimeout(move1, 500);
      setTimeout(move1, 750);
      setTimeout(move1, 1000);
      break;

    case 5:
      setTimeout(move1, 250);
      setTimeout(move1, 500);
      setTimeout(move1, 750);
      setTimeout(move1, 1000);
      setTimeout(move1, 1250);
      break;
    case 6:
      setTimeout(move1, 250);
      setTimeout(move1, 500);
      setTimeout(move1, 750);
      setTimeout(move1, 1000);
      setTimeout(move1, 1250);
      setTimeout(move1, 1500);
      break;

    default:
      break;
  }

}
}
  var newattribute1 = "dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", newattribute1);
  setTimeout(remove, 1000);
}
z = 0;

//
function GetRandom2() {
  document.querySelectorAll("img")[1].classList.add("button-clicked");

  randomNumber2 = Math.random() * 6 + 1;
  randomNumber2 = Math.floor(randomNumber2);
  console.log(randomNumber2);

  // j=i+randomNumber1;

  k = z + randomNumber2;
  if (k < 101) {
   

  switch (k) {
    case 4:
      $(`#${25}`).addClass("blackPawn");
      $(`#${4}`).removeClass("blackPawn");
      $(`#${4 - randomNumber2}`).removeClass("blackPawn");
      $(`#${1}`).removeClass("blackPawn");
      onLadder.play();
      z = 25;
      break;
    case 21:
      $(`#${42}`).addClass("blackPawn");
      $(`#${21}`).removeClass("blackPawn");
      $(`#${21 - randomNumber2}`).removeClass("blackPawn");
      onLadder.play();
      z = 42;
      break;
    case 32:
      $(`#${7}`).addClass("blackPawn");
      $(`#${32}`).removeClass("blackPawn");
      $(`#${32 - randomNumber2}`).removeClass("blackPawn");
      onSnake.play();
      z = 7;
      break;
    case 33:
      $(`#${75}`).addClass("blackPawn");
      $(`#${33}`).removeClass("blackPawn");
      $(`#${33 - randomNumber2}`).removeClass("blackPawn");
      onSnake.play();
      z = 75;
      break;
    case 58:
      $(`#${35}`).addClass("blackPawn");
      $(`#${58}`).removeClass("blackPawn");
      $(`#${58 - randomNumber2}`).removeClass("blackPawn");
      onSnake.play();
      z = 35;
      break;
    case 63:
      $(`#${80}`).addClass("blackPawn");
      $(`#${63}`).removeClass("blackPawn");
      $(`#${63 - randomNumber2}`).removeClass("blackPawn");
      onLadder.play();
      z = 80;
      break;
    case 88:
      $(`#${70}`).addClass("blackPawn");
      $(`#${88}`).removeClass("blackPawn");
      $(`#${88 - randomNumber2}`).removeClass("blackPawn");
      onSnake.play();
      z = 70;
      break;
    case 87:
      $(`#${94}`).addClass("blackPawn");
      $(`#${87}`).removeClass("blackPawn");
      $(`#${87 - randomNumber2}`).removeClass("blackPawn");
      onLadder.play();
      z = 94;
      break;
    case 96:
      $(`#${18}`).addClass("blackPawn");
      $(`#${96}`).removeClass("blackPawn");
      $(`#${96 - randomNumber2}`).removeClass("blackPawn");
      onSnake.play();
      z = 18;
      break;
    case 99:
      $(`#${60}`).addClass("blackPawn");
      $(`#${99}`).removeClass("blackPawn");
      $(`#${99 - randomNumber2}`).removeClass("blackPawn");
      onSnake.play();
      z = 60;
      break;
    case 100:
      $(`#${100 - randomNumber2}`).removeClass("blackPawn");
      audio1.play();
      setTimeout(winner2, 1000);
      alert("Plyer 2 is winner");

      break;

    default:
      break;
  }
  if(k!=4 && k!=21 && k!=32 && k!=33 && k!=58 && k!=63 && k!=88 && k!=87 && k!=96 &&k!=99){
  switch (randomNumber2) {
    case 1:
      setTimeout(move2, 250);
      break;
    case 2:
      setTimeout(move2, 250);
      setTimeout(move2, 500);
      break;
    case 3:
      setTimeout(move2, 250);
      setTimeout(move2, 500);
      setTimeout(move2, 750);
      break;
    case 4:
      setTimeout(move2, 250);
      setTimeout(move2, 500);
      setTimeout(move2, 750);
      setTimeout(move2, 1000);
      break;

    case 5:
      setTimeout(move2, 250);
      setTimeout(move2, 500);
      setTimeout(move2, 750);
      setTimeout(move2, 1000);
      setTimeout(move2, 1250);
      break;
    case 6:
      setTimeout(move2, 250);
      setTimeout(move2, 500);
      setTimeout(move2, 750);
      setTimeout(move2, 1000);
      setTimeout(move2, 1250);
      setTimeout(move2, 1500);
      break;

    default:
      break;
  }

}
}

//   if(j=k){
//   $(`#${j}`).addClass("Pawn2");
// }


  var newattribute2 = "dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", newattribute2);
  setTimeout(remove, 1000);
}

function move1() {
  i++;
  $(`#${i}`).addClass("brownPawn");
  $(`#${i - 1}`).removeClass("brownPawn");
}
function move2() {
  z++;
  $(`#${z}`).addClass("blackPawn");
  $(`#${z - 1}`).removeClass("blackPawn");
}

function remove() {
  document.querySelectorAll("img")[0].classList.remove("button-clicked");
  document.querySelectorAll("img")[1].classList.remove("button-clicked");
}

function winner1() {
  alert("Player 1 is winner");
}
function winner2() {
  alert("Player 2 is winner");
}

$(`#${1}`).addClass("Pawn2");
document.querySelectorAll("bUtton")[0].addEventListener("click", remove2);
function remove2 () {
  $(`#${1}`).removeClass("Pawn2");
}
