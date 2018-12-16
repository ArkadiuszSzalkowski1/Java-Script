var board = document.querySelectorAll(".cell");
var paragraph = document.querySelector("p");

var actualPlayer = "X";
var canPlay = true;
var clicked = 0;

for (element of board) {
	element.addEventListener("click",function(){
		if (this.textContent == "" && canPlay) {
			this.textContent = actualPlayer;
			changePlayer();
			clicked++;
			check();
		}
	});
}

function changePlayer() {
	if (actualPlayer == "X") {
		actualPlayer = "O";
	} else {
		actualPlayer = "X";
	}
}

function check() {
	win = checkIfWin();
	draw = checkIfDraw();
	if (win || draw) {
		canPlay = false;
		if (win) {
			changePlayer();
			paragraph.textContent = "Wygrał gracz grający: " + actualPlayer;
		} else {
			paragraph.textContent = "Nastąpił remis";
		}
	}
}

function checkIfWin() {
	if (board[0].textContent == board[1].textContent && board[1].textContent == board[2].textContent && board[2].textContent != "") {
		return true;
	}
	if (board[3].textContent == board[4].textContent && board[4].textContent == board[5].textContent && board[5].textContent != "") {
		return true;
	}
	if (board[6].textContent == board[7].textContent && board[7].textContent == board[8].textContent && board[8].textContent != "") {
		return true;
	}
	if (board[0].textContent == board[3].textContent && board[3].textContent == board[6].textContent && board[6].textContent != "") {
		return true;
	}
	if (board[1].textContent == board[4].textContent && board[4].textContent == board[7].textContent && board[7].textContent != "") {
		return true;
	}
	if (board[2].textContent == board[5].textContent && board[5].textContent == board[8].textContent && board[8].textContent != "") {
		return true;
	}
	if (board[0].textContent == board[4].textContent && board[4].textContent == board[8].textContent && board[8].textContent != "") {
		return true;
	}
	if (board[2].textContent == board[4].textContent && board[4].textContent == board[6].textContent && board[6].textContent != "") {
		return true;
	}
	return false;
}

function checkIfDraw() {
	if (clicked == 9  && !checkIfWin()) {
		return true;
	}
	return false;
}