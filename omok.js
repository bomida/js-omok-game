"use strict";

// [V] td 클릭 시 O 찍히게 만들기
// [V] 칸이 채워져 있는가
// [V] 턴 넘기기 - 첫 플레이어가 O를 찍으면, 다음에 X가 찍히게 하기
// [V] 현재 플레이어 표시하기 1 - 아래 텍스트 변경
// [V] 현재 플레이어 표시하기 2 - 상단에 해당 플레이어 배경색 변경
// [ ] 5개, 1줄이 되었는가
// [V] 우승자 팝업
// [V] 재시작 눌렀을 때 td안 텍스트 지우기

let thisTurn = "O";

const board = document.querySelector("#board");
const resetBtn = document.querySelector("button");
const players = document.querySelector("div");
const player = document.querySelector("span");
const trs = document.querySelectorAll("tr");
const td = document.querySelector("td");

function boxClick(event) {
  let target = event.target;
  if (target.matches("td")) {
    if (target.innerHTML !== "") {
      console.log("not empty");
      return
    } else {
      console.log("filled");
      target.innerText = thisTurn;
      thisTurn = thisTurn === "O" ? "X" : "O";
      document.querySelector(".nowPlayer").textContent = `${thisTurn} 차례입니다.`;

      if (thisTurn === "O") {
        players.firstElementChild.classList.add("bgRed");
        players.lastElementChild.classList.remove("bgRed");
      } else if (thisTurn === "X") {
        players.firstElementChild.classList.remove("bgRed");
        players.lastElementChild.classList.add("bgRed");
      }
    }
  }
}

for (let i = 0; i < trs.length; i++) {

}

function gameReset() {
  trs.forEach(tr => {
    let tds = tr.childNodes;
    tds.forEach(td => {
      td.innerHTML = "";
    })
  });
}

function WinnerPopUp() {
  alert(`${thisTurn}이(가) 이겼습니다.`);
  gameReset()
}

//재시작 버튼 이벤트 리스너
resetBtn.addEventListener("click", gameReset);

//td 클릭 이벤트 리스너
board.addEventListener("click", boxClick);